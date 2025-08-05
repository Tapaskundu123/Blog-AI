// middleware/multer.js
import multer from 'multer';

const storage = multer.memoryStorage(); // ✔️ correct for buffer upload
export const upload = multer({ storage });
