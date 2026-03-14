"""
PDF to JPG Conversion Worker
Converts PDF pages to JPG images.
"""

import subprocess
import os
from typing import List, Optional


async def pdf_to_jpg(
    input_file: str,
    output_dir: str,
    quality: str = "high",
    dpi: int = 150
) -> List[str]:
    """
    Convert PDF pages to JPG images using pdftoppm.
    
    Args:
        input_file: Path to input PDF
        output_dir: Directory for output images
        quality: Image quality (low, medium, high)
        dpi: Resolution in DPI
    
    Returns:
        List of paths to generated JPG files
    """
    os.makedirs(output_dir, exist_ok=True)
    
    quality_settings = {
        "low": 72,
        "medium": 150,
        "high": 300
    }
    
    actual_dpi = quality_settings.get(quality, dpi)
    output_prefix = os.path.join(output_dir, "page")
    
    cmd = [
        "pdftoppm",
        "-jpeg",
        "-r", str(actual_dpi),
        input_file,
        output_prefix
    ]
    
    try:
        subprocess.run(cmd, capture_output=True, text=True, check=True)
        
        # Collect generated files
        output_files = sorted([
            os.path.join(output_dir, f)
            for f in os.listdir(output_dir)
            if f.startswith("page") and f.endswith(".jpg")
        ])
        
        return output_files
    except subprocess.CalledProcessError as e:
        raise RuntimeError(f"PDF to JPG conversion failed: {e.stderr}")


async def pdf_page_to_jpg(
    input_file: str,
    output_path: str,
    page_number: int,
    dpi: int = 150
) -> str:
    """Convert a single PDF page to JPG."""
    cmd = [
        "pdftoppm",
        "-jpeg",
        "-r", str(dpi),
        "-f", str(page_number),
        "-l", str(page_number),
        "-singlefile",
        input_file,
        output_path.replace(".jpg", "")
    ]
    
    subprocess.run(cmd, capture_output=True, text=True, check=True)
    return output_path
