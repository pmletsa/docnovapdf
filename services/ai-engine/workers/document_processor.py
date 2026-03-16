"""
Document Processor for AI Engine
Uses Unstructured library to parse and chunk documents.
"""

from typing import List, Dict
import os


async def process_document(file_path: str) -> Dict:
    """
    Process document and extract text using Unstructured.
    
    Args:
        file_path: Path to document file
    
    Returns:
        Dict with extracted text and metadata
    """
    try:
        from unstructured.partition.auto import partition
        
        # Partition document into elements
        elements = partition(filename=file_path)
        
        # Extract text from elements
        text_chunks = []
        for element in elements:
            text_chunks.append(str(element))
        
        full_text = "\n\n".join(text_chunks)
        
        return {
            "text": full_text,
            "chunks": text_chunks,
            "num_chunks": len(text_chunks),
            "file_size": os.path.getsize(file_path)
        }
    except Exception as e:
        raise RuntimeError(f"Document processing failed: {str(e)}")


async def chunk_text(text: str, chunk_size: int = 1000, overlap: int = 200) -> List[str]:
    """
    Split text into overlapping chunks for processing.
    
    Args:
        text: Text to chunk
        chunk_size: Size of each chunk in characters
        overlap: Overlap between chunks
    
    Returns:
        List of text chunks
    """
    chunks = []
    start = 0
    text_length = len(text)
    
    while start < text_length:
        end = start + chunk_size
        chunk = text[start:end]
        chunks.append(chunk)
        start = end - overlap
    
    return chunks


async def extract_tables(file_path: str) -> List[Dict]:
    """
    Extract tables from document using Unstructured.
    
    Args:
        file_path: Path to document file
    
    Returns:
        List of extracted tables
    """
    try:
        from unstructured.partition.auto import partition
        
        elements = partition(filename=file_path)
        
        tables = []
        for element in elements:
            if element.category == "Table":
                tables.append({
                    "text": str(element),
                    "metadata": element.metadata.to_dict() if hasattr(element, 'metadata') else {}
                })
        
        return tables
    except Exception as e:
        raise RuntimeError(f"Table extraction failed: {str(e)}")
