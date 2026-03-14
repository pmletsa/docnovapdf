"""
Compress PDF Worker
Reduces PDF file size while maintaining quality.
"""

import subprocess
import os


COMPRESSION_SETTINGS = {
    "low": {
        "image_dpi": 300,
        "image_quality": 90,
    },
    "medium": {
        "image_dpi": 150,
        "image_quality": 75,
    },
    "high": {
        "image_dpi": 72,
        "image_quality": 50,
    }
}


async def compress_pdf(
    input_file: str,
    output_path: str,
    level: str = "medium"
) -> dict:
    """
    Compress PDF using Ghostscript.
    
    Args:
        input_file: Path to input PDF
        output_path: Path for compressed output
        level: Compression level (low, medium, high)
    
    Returns:
        Dict with original and compressed sizes
    """
    settings = COMPRESSION_SETTINGS.get(level, COMPRESSION_SETTINGS["medium"])
    
    # Ghostscript compression command
    cmd = [
        "gs",
        "-sDEVICE=pdfwrite",
        "-dCompatibilityLevel=1.4",
        f"-dPDFSETTINGS=/ebook",  # /screen, /ebook, /printer, /prepress
        "-dNOPAUSE",
        "-dQUIET",
        "-dBATCH",
        f"-dColorImageResolution={settings['image_dpi']}",
        f"-dGrayImageResolution={settings['image_dpi']}",
        f"-sOutputFile={output_path}",
        input_file
    ]
    
    original_size = os.path.getsize(input_file)
    
    try:
        subprocess.run(cmd, capture_output=True, text=True, check=True)
        compressed_size = os.path.getsize(output_path)
        
        return {
            "original_size": original_size,
            "compressed_size": compressed_size,
            "reduction_percent": round((1 - compressed_size / original_size) * 100, 2),
            "output_path": output_path
        }
    except subprocess.CalledProcessError as e:
        raise RuntimeError(f"PDF compression failed: {e.stderr}")
