import jwt from 'jsonwebtoken';

export const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ success: false, message: "Unauthorized: Token missing or malformed" });
  }

  const token = authHeader.split(" ")[1]; // ✅ Extract actual token

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded; // optionally pass user info to the next handler
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: "Invalid Token" });
  }
};
