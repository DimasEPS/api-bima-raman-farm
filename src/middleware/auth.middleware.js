import jwt from 'jsonwebtoken';
import * as authRepo from '../repositories/auth.repository.js';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Token tidak ditemukan' });
    }

    const blacklisted = await authRepo.isTokenBlacklisted(token);
    if (blacklisted) {
      return res.status(401).json({ message: 'Token sudah tidak berlaku' });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token tidak valid' });
  }
};
