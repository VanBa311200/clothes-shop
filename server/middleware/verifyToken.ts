import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const verifyToken = (req: Request, res: Response, next) => {
  const authHeader: String = req.header("Authorization");

  const token = authHeader && authHeader.split(" ")[1];

  if (!token)
    return res.status(401).json({ success: false, message: "Token Not Found" });
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    (req as any).adminId = decoded.adminId;
    next();
  } catch (err) {
    return res.status(403).json({ success: false, message: "Invalid Token" });
  }
};
