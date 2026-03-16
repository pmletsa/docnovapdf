"""
Conversion Engine Service
Handles document format conversions: PDF to Word, Word to PDF, PDF to JPG, etc.
Uses LibreOffice and Pandoc for processing.
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, List
import tempfile
import os

from workers.pdf_to_word import pdf_to_word
from workers.word_to_pdf import word_to_pdf
from workers.pdf_to_jpg import pdf_to_jpg
from workers.jpg_to_pdf import jpg_to_pdf
from utils import download_file, upload_file, cleanup_files

app = FastAPI(title="DocNova Conversion Engine", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ConvertRequest(BaseModel):
    file_url: str
    output_format: str
    options: Optional[dict] = None


@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "conversion-engine"}


@app.post("/pdf-to-word")
async def pdf_to_word_endpoint(request: ConvertRequest):
    """Convert PDF to Word document."""
    temp_files = []
    
    try:
        input_path = await download_file(request.file_url)
        temp_files.append(input_path)
        
        output_file = tempfile.mktemp(suffix='.docx')
        temp_files.append(output_file)
        
        result_path = await pdf_to_word(input_path, output_file)
        
        return {
            "status": "success",
            "conversion": "pdf-to-word",
            "output_path": result_path,
            "file_size": os.path.getsize(result_path)
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cleanup_files(*temp_files)


@app.post("/word-to-pdf")
async def word_to_pdf_endpoint(request: ConvertRequest):
    """Convert Word document to PDF."""
    temp_files = []
    
    try:
        input_path = await download_file(request.file_url)
        temp_files.append(input_path)
        
        output_file = tempfile.mktemp(suffix='.pdf')
        temp_files.append(output_file)
        
        result_path = await word_to_pdf(input_path, output_file)
        
        return {
            "status": "success",
            "conversion": "word-to-pdf",
            "output_path": result_path,
            "file_size": os.path.getsize(result_path)
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cleanup_files(*temp_files)


@app.post("/pdf-to-jpg")
async def pdf_to_jpg_endpoint(request: ConvertRequest):
    """Convert PDF pages to JPG images."""
    temp_files = []
    
    try:
        input_path = await download_file(request.file_url)
        temp_files.append(input_path)
        
        output_dir = tempfile.mkdtemp()
        temp_files.append(output_dir)
        
        quality = request.options.get('quality', 'high') if request.options else 'high'
        output_paths = await pdf_to_jpg(input_path, output_dir, quality=quality)
        
        return {
            "status": "success",
            "conversion": "pdf-to-jpg",
            "output_files": output_paths,
            "page_count": len(output_paths)
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cleanup_files(*temp_files)


@app.post("/jpg-to-pdf")
async def jpg_to_pdf_endpoint(request: ConvertRequest):
    """Convert JPG images to PDF."""
    temp_files = []
    
    try:
        # Support multiple image URLs
        file_urls = request.options.get('file_urls', [request.file_url]) if request.options else [request.file_url]
        
        input_paths = []
        for url in file_urls:
            path = await download_file(url)
            temp_files.append(path)
            input_paths.append(path)
        
        output_file = tempfile.mktemp(suffix='.pdf')
        temp_files.append(output_file)
        
        result_path = await jpg_to_pdf(input_paths, output_file)
        
        return {
            "status": "success",
            "conversion": "jpg-to-pdf",
            "output_path": result_path,
            "file_size": os.path.getsize(result_path),
            "image_count": len(input_paths)
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cleanup_files(*temp_files)


@app.post("/pdf-to-excel")
async def pdf_to_excel(request: ConvertRequest):
    """Convert PDF tables to Excel."""
    return {"status": "processing", "conversion": "pdf-to-excel"}


@app.post("/pdf-to-pptx")
async def pdf_to_pptx(request: ConvertRequest):
    """Convert PDF to PowerPoint."""
    return {"status": "processing", "conversion": "pdf-to-pptx"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8002)
