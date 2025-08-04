import jwt from 'jsonwebtoken';

export const auth = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    jwt.verify(token, process.env.JWT_SECRET_KEY);
    next(); // ✅ Go to the next middleware/controller
  } catch (error) {
    res.json({ success: false, message: "Invalid Token" });
  }
}
