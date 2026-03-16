"""
PDF Engine Service
Handles PDF manipulation tasks: merge, split, compress, rotate, etc.
Uses qpdf and pdfcpu for processing.
"""

import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import asyncio
import tempfile

from workers.merge_worker import merge_pdfs
from workers.split_worker import split_pdf_all_pages, split_pdf_by_range, split_pdf_by_pages
from workers.compress_worker import compress_pdf
from utils import download_file, upload_file, cleanup_files

app = FastAPI(title="DocNova PDF Engine", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class MergeRequest(BaseModel):
    file_urls: List[str]
    output_filename: str


class SplitRequest(BaseModel):
    file_url: str
    pages: Optional[List[int]] = None
    split_all: bool = False


class CompressRequest(BaseModel):
    file_url: str
    level: str = "medium"  # low, medium, high


class RotateRequest(BaseModel):
    file_url: str
    angle: int  # 90, 180, 270
    pages: Optional[List[int]] = None


@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "pdf-engine"}


@app.post("/merge")
async def merge_pdfs_endpoint(request: MergeRequest):
    """Merge multiple PDF files into one."""
    temp_files = []
    output_file = None
    
    try:
        # Download all input files
        input_paths = []
        for url in request.file_urls:
            path = await download_file(url)
            temp_files.append(path)
            input_paths.append(path)
        
        # Create output file
        output_file = tempfile.mktemp(suffix='.pdf')
        temp_files.append(output_file)
        
        # Merge PDFs
        result_path = await merge_pdfs(input_paths, output_file)
        
        # Read result for response (in production, upload to storage)
        with open(result_path, 'rb') as f:
            file_size = os.path.getsize(result_path)
        
        return {
            "status": "success",
            "message": f"Successfully merged {len(request.file_urls)} files",
            "output_path": result_path,
            "file_size": file_size
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cleanup_files(*temp_files)


@app.post("/split")
async def split_pdf_endpoint(request: SplitRequest):
    """Split a PDF into multiple files."""
    temp_files = []
    
    try:
        # Download input file
        input_path = await download_file(request.file_url)
        temp_files.append(input_path)
        
        if request.split_all:
            # Split into individual pages
            output_dir = tempfile.mkdtemp()
            temp_files.append(output_dir)
            output_paths = await split_pdf_all_pages(input_path, output_dir)
            
            return {
                "status": "success",
                "message": f"Split into {len(output_paths)} pages",
                "output_files": output_paths,
                "page_count": len(output_paths)
            }
        elif request.pages:
            # Extract specific pages
            output_file = tempfile.mktemp(suffix='.pdf')
            temp_files.append(output_file)
            result_path = await split_pdf_by_pages(input_path, output_file, request.pages)
            
            return {
                "status": "success",
                "message": f"Extracted {len(request.pages)} pages",
                "output_path": result_path
            }
        else:
            raise HTTPException(status_code=400, detail="Must specify either split_all or pages")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cleanup_files(*temp_files)


@app.post("/compress")
async def compress_pdf_endpoint(request: CompressRequest):
    """Compress a PDF file."""
    temp_files = []
    
    try:
        # Download input file
        input_path = await download_file(request.file_url)
        temp_files.append(input_path)
        
        # Create output file
        output_file = tempfile.mktemp(suffix='.pdf')
        temp_files.append(output_file)
        
        # Compress PDF
        result = await compress_pdf(input_path, output_file, request.level)
        
        return {
            "status": "success",
            "message": f"Compressed with {request.level} level",
            "original_size": result['original_size'],
            "compressed_size": result['compressed_size'],
            "reduction_percent": result['reduction_percent'],
            "output_path": result['output_path']
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cleanup_files(*temp_files)


@app.post("/rotate")
async def rotate_pdf(request: RotateRequest):
    """Rotate PDF pages."""
    # TODO: Implement with qpdf
    return {
        "status": "processing",
        "message": f"Rotating {request.angle} degrees"
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
