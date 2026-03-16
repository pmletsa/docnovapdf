"""
JPG to PDF Conversion Worker
Converts JPG images to PDF format.
"""

import subprocess
import os
from typing import List
from PIL import Image


async def jpg_to_pdf(input_files: List[str], output_path: str) -> str:
    """
    Convert JPG images to PDF using PIL/Pillow.
    
    Args:
        input_files: List of paths to input JPG files
        output_path: Path for output PDF
    
    Returns:
        Path to converted PDF
    """
    if not input_files:
        raise ValueError("At least one image file is required")
    
    try:
        # Open all images
        images = []
        for img_path in input_files:
            img = Image.open(img_path)
            # Convert to RGB if necessary (PDF requires RGB)
            if img.mode != 'RGB':
                img = img.convert('RGB')
            images.append(img)
        
        # Save as PDF
        if len(images) == 1:
            images[0].save(output_path, 'PDF', resolution=100.0)
        else:
            # First image is the base, rest are appended
            images[0].save(
                output_path,
                'PDF',
                resolution=100.0,
                save_all=True,
                append_images=images[1:]
            )
        
        # Close all images
        for img in images:
            img.close()
        
        return output_path
    except Exception as e:
        raise RuntimeError(f"JPG to PDF conversion failed: {str(e)}")


async def jpg_to_pdf_imagemagick(input_files: List[str], output_path: str) -> str:
    """
    Convert JPG images to PDF using ImageMagick (alternative method).
    
    Args:
        input_files: List of paths to input JPG files
        output_path: Path for output PDF
    
    Returns:
        Path to converted PDF
    """
    if not input_files:
        raise ValueError("At least one image file is required")
    
    # ImageMagick convert command
    cmd = ["convert"] + input_files + [output_path]
    
    try:
        subprocess.run(cmd, capture_output=True, text=True, check=True)
        return output_path
    except subprocess.CalledProcessError as e:
        raise RuntimeError(f"JPG to PDF conversion failed: {e.stderr}")
