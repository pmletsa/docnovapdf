"""
File handling utilities for downloading and uploading files.
"""

import httpx
import tempfile
import os
from typing import Optional
import shutil


async def download_file(url: str, destination: Optional[str] = None) -> str:
    """
    Download a file from URL to local storage.
    
    Args:
        url: URL to download from
        destination: Optional destination path. If None, creates temp file.
    
    Returns:
        Path to downloaded file
    """
    if destination is None:
        # Create temp file with proper extension
        ext = os.path.splitext(url.split('?')[0])[-1] or '.pdf'
        fd, destination = tempfile.mkstemp(suffix=ext)
        os.close(fd)
    
    async with httpx.AsyncClient(timeout=300.0) as client:
        response = await client.get(url)
        response.raise_for_status()
        
        with open(destination, 'wb') as f:
            f.write(response.content)
    
    return destination


async def upload_file(file_path: str, upload_url: str) -> dict:
    """
    Upload a file to a presigned URL or storage endpoint.
    
    Args:
        file_path: Path to file to upload
        upload_url: URL to upload to
    
    Returns:
        Response data
    """
    async with httpx.AsyncClient(timeout=300.0) as client:
        with open(file_path, 'rb') as f:
            response = await client.put(upload_url, content=f.read())
            response.raise_for_status()
    
    return {"status": "uploaded", "url": upload_url}


def cleanup_files(*file_paths: str) -> None:
    """
    Clean up temporary files.
    
    Args:
        file_paths: Paths to files to delete
    """
    for path in file_paths:
        try:
            if os.path.isfile(path):
                os.remove(path)
            elif os.path.isdir(path):
                shutil.rmtree(path)
        except Exception:
            pass


def get_file_size(file_path: str) -> int:
    """Get file size in bytes."""
    return os.path.getsize(file_path)


def format_file_size(size_bytes: int) -> str:
    """Format file size in human-readable format."""
    for unit in ['B', 'KB', 'MB', 'GB']:
        if size_bytes < 1024.0:
            return f"{size_bytes:.2f} {unit}"
        size_bytes /= 1024.0
    return f"{size_bytes:.2f} TB"
