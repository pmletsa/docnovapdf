"""
Merge PDF Worker
Combines multiple PDF files into a single document.
"""

import subprocess
import tempfile
import os
from typing import List


async def merge_pdfs(input_files: List[str], output_path: str) -> str:
    """
    Merge multiple PDF files using qpdf.
    
    Args:
        input_files: List of paths to input PDF files
        output_path: Path for the merged output file
    
    Returns:
        Path to the merged PDF file
    """
    if len(input_files) < 2:
        raise ValueError("At least 2 files required for merge")
    
    # Build qpdf command
    cmd = ["qpdf", "--empty", "--pages"]
    for f in input_files:
        cmd.extend([f, "1-z"])  # 1-z means all pages
    cmd.extend(["--", output_path])
    
    try:
        result = subprocess.run(cmd, capture_output=True, text=True, check=True)
        return output_path
    except subprocess.CalledProcessError as e:
        raise RuntimeError(f"PDF merge failed: {e.stderr}")


async def merge_pdfs_with_bookmarks(
    input_files: List[str],
    output_path: str,
    bookmark_names: List[str] = None
) -> str:
    """
    Merge PDFs and add bookmarks for each original file.
    """
    # TODO: Implement bookmark addition
    return await merge_pdfs(input_files, output_path)
