"""
OCR Engine Service
Handles text extraction from scanned documents and images.
Uses Tesseract OCR and OpenCV for processing.
"""

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional, List

app = FastAPI(title="DocNova OCR Engine", version="1.0.0")


class OcrRequest(BaseModel):
    file_url: str
    language: str = "eng"
    output_format: str = "text"  # text, pdf, hocr


class OcrResult(BaseModel):
    text: str
    confidence: float
    pages: int


@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "ocr-engine"}


@app.post("/ocr")
async def perform_ocr(request: OcrRequest):
    """Extract text from scanned PDF or image."""
    return {
        "status": "processing",
        "language": request.language,
        "output_format": request.output_format
    }


@app.post("/ocr-to-searchable-pdf")
async def ocr_to_searchable_pdf(request: OcrRequest):
    """Convert scanned PDF to searchable PDF."""
    return {
        "status": "processing",
        "message": "Creating searchable PDF"
    }


@app.get("/languages")
async def get_supported_languages():
    """Get list of supported OCR languages."""
    return {
        "languages": [
            {"code": "eng", "name": "English"},
            {"code": "fra", "name": "French"},
            {"code": "deu", "name": "German"},
            {"code": "spa", "name": "Spanish"},
            {"code": "ita", "name": "Italian"},
            {"code": "por", "name": "Portuguese"},
            {"code": "nld", "name": "Dutch"},
            {"code": "pol", "name": "Polish"},
            {"code": "rus", "name": "Russian"},
            {"code": "jpn", "name": "Japanese"},
            {"code": "chi_sim", "name": "Chinese (Simplified)"},
            {"code": "chi_tra", "name": "Chinese (Traditional)"},
            {"code": "kor", "name": "Korean"},
            {"code": "ara", "name": "Arabic"},
        ]
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8003)
