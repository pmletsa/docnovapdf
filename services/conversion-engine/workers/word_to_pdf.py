"""
Word to PDF Conversion Worker
Converts Word documents to PDF format.
"""

import subprocess
import os


async def word_to_pdf(input_file: str, output_path: str) -> str:
    """
    Convert Word document to PDF using LibreOffice.
    
    Args:
        input_file: Path to input Word document (.docx, .doc)
        output_path: Path for output PDF
    
    Returns:
        Path to converted PDF
    """
    output_dir = os.path.dirname(output_path)
    os.makedirs(output_dir, exist_ok=True)
    
    # LibreOffice conversion
    cmd = [
        "libreoffice",
        "--headless",
        "--convert-to", "pdf",
        "--outdir", output_dir,
        input_file
    ]
    
    try:
        subprocess.run(cmd, capture_output=True, text=True, check=True)
        
        # LibreOffice names output based on input filename
        base_name = os.path.splitext(os.path.basename(input_file))[0]
        generated_path = os.path.join(output_dir, f"{base_name}.pdf")
        
        # Rename to desired output path if different
        if generated_path != output_path:
            os.rename(generated_path, output_path)
        
        return output_path
    except subprocess.CalledProcessError as e:
        raise RuntimeError(f"Word to PDF conversion failed: {e.stderr}")
