"""
OCR PDF Worker
Extracts text from scanned PDFs and images using Tesseract.
"""

import subprocess
import os
import tempfile
from typing import Optional


async def ocr_pdf(
    input_file: str,
    output_path: str,
    language: str = "eng"
) -> dict:
    """
    Perform OCR on a PDF and create a searchable PDF.
    
    Args:
        input_file: Path to input PDF/image
        output_path: Path for output searchable PDF
        language: Tesseract language code
    
    Returns:
        Dict with extracted text and confidence
    """
    # Use ocrmypdf for PDF OCR
    cmd = [
        "ocrmypdf",
        "--language", language,
        "--output-type", "pdf",
        "--skip-text",  # Skip pages that already have text
        input_file,
        output_path
    ]
    
    try:
        result = subprocess.run(cmd, capture_output=True, text=True, check=True)
        return {
            "output_path": output_path,
            "status": "success"
        }
    except subprocess.CalledProcessError as e:
        raise RuntimeError(f"OCR failed: {e.stderr}")


async def extract_text(
    input_file: str,
    language: str = "eng"
) -> str:
    """
    Extract text from image or PDF using Tesseract.
    """
    cmd = [
        "tesseract",
        input_file,
        "stdout",
        "-l", language
    ]
    
    try:
        result = subprocess.run(cmd, capture_output=True, text=True, check=True)
        return result.stdout
    except subprocess.CalledProcessError as e:
        raise RuntimeError(f"Text extraction failed: {e.stderr}")


async def ocr_image(
    input_file: str,
    language: str = "eng",
    output_format: str = "text"
) -> dict:
    """
    Perform OCR on an image file.
    
    Args:
        input_file: Path to input image
        language: Tesseract language code
        output_format: Output format (text, hocr, pdf)
    """
    with tempfile.NamedTemporaryFile(suffix=f".{output_format}", delete=False) as tmp:
        output_base = tmp.name.rsplit(".", 1)[0]
    
    cmd = ["tesseract", input_file, output_base, "-l", language]
    
    if output_format == "pdf":
        cmd.append("pdf")
    elif output_format == "hocr":
        cmd.append("hocr")
    
    try:
        subprocess.run(cmd, capture_output=True, text=True, check=True)
        
        if output_format == "text":
            output_file = f"{output_base}.txt"
        elif output_format == "pdf":
            output_file = f"{output_base}.pdf"
        else:
            output_file = f"{output_base}.hocr"
        
        with open(output_file, "r") as f:
            content = f.read()
        
        return {
            "content": content,
            "output_file": output_file
        }
    except subprocess.CalledProcessError as e:
        raise RuntimeError(f"OCR failed: {e.stderr}")
