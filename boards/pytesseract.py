import pytesseract
from PIL import Image

pytesseract.pytesseract.tesseract_cmd=r'C:\Program Files\Tesseract-OCR\tesseract'

img_path=r"C:\Users\주바리\Desktop\ocr_sample\ocr_sample\Receipt_01.jpg" 
image_pil=Image.open(img_path)
img_pytesseract_en=pytesseract.image_to_string(image_pil)
print(img_pytesseract_en)
