"""
PDF to Word Conversion Worker
Converts PDF documents to editable Word files.
"""

import subprocess
import os
from typing import Optional


async def pdf_to_word(input_file: str, output_path: str) -> str:
    """
    Convert PDF to Word using LibreOffice.
    
    Args:
        input_file: Path to input PDF
        output_path: Path for output DOCX
    
    Returns:
        Path to converted Word document
    """
    output_dir = os.path.dirname(output_path)
    os.makedirs(output_dir, exist_ok=True)
    
    # LibreOffice conversion
    cmd = [
        "libreoffice",
        "--headless",
        "--convert-to", "docx",
        "--outdir", output_dir,
        input_file
    ]
    
    try:
        subprocess.run(cmd, capture_output=True, text=True, check=True)
        
        # LibreOffice names output based on input filename
        base_name = os.path.splitext(os.path.basename(input_file))[0]
        generated_path = os.path.join(output_dir, f"{base_name}.docx")
        
        # Rename to desired output path if different
        if generated_path != output_path:
            os.rename(generated_path, output_path)
        
        return output_path
    except subprocess.CalledProcessError as e:
        raise RuntimeError(f"PDF to Word conversion failed: {e.stderr}")
