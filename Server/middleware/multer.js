// Server/middleware/multer.js
import multer from 'multer';

const storage = multer.memoryStorage(); // or diskStorage if saving locally

export const upload = multer({ storage });
