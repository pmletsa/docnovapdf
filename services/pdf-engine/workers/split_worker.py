"""
Split PDF Worker
Separates PDF pages into multiple files.
"""

import subprocess
import os
from typing import List, Optional


async def split_pdf_all_pages(input_file: str, output_dir: str) -> List[str]:
    """
    Split PDF into individual pages.
    
    Args:
        input_file: Path to input PDF file
        output_dir: Directory for output files
    
    Returns:
        List of paths to split PDF files
    """
    os.makedirs(output_dir, exist_ok=True)
    
    # Get page count first
    cmd_pages = ["qpdf", "--show-npages", input_file]
    result = subprocess.run(cmd_pages, capture_output=True, text=True, check=True)
    num_pages = int(result.stdout.strip())
    
    output_files = []
    for i in range(1, num_pages + 1):
        output_path = os.path.join(output_dir, f"page_{i:04d}.pdf")
        cmd = ["qpdf", input_file, "--pages", input_file, str(i), "--", output_path]
        subprocess.run(cmd, capture_output=True, text=True, check=True)
        output_files.append(output_path)
    
    return output_files


async def split_pdf_by_range(
    input_file: str,
    output_path: str,
    start_page: int,
    end_page: int
) -> str:
    """
    Extract a range of pages from PDF.
    """
    cmd = [
        "qpdf", input_file,
        "--pages", input_file, f"{start_page}-{end_page}",
        "--", output_path
    ]
    subprocess.run(cmd, capture_output=True, text=True, check=True)
    return output_path


async def split_pdf_by_pages(
    input_file: str,
    output_path: str,
    pages: List[int]
) -> str:
    """
    Extract specific pages from PDF.
    """
    page_spec = ",".join(str(p) for p in pages)
    cmd = [
        "qpdf", input_file,
        "--pages", input_file, page_spec,
        "--", output_path
    ]
    subprocess.run(cmd, capture_output=True, text=True, check=True)
    return output_path
