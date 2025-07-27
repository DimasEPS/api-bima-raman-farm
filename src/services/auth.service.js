import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { ApiError } from '../utils/apiError.util.js';
import * as authRepo from '../repositories/auth.repository.js';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';
const JWT_EXPIRES_IN = '1h';

export const register = async (data) => {
  const existing = await authRepo.isEmailOrUsernameTaken(data.email, data.username);

  if (existing) {
    throw new ApiError(409, 'Email atau username sudah digunakan');
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);
  const user = await authRepo.createUser({
    username: data.username,
    email: data.email,
    name: data.name,
    password: hashedPassword,
  });

  return user;
};

export const login = async (data) => {
  const user = await authRepo.findUserByEmailOrUsername(data.identifier);

  if (!user || !(await bcrypt.compare(data.password, user.password))) {
    throw new ApiError(401, 'Email/username atau password salah');
  }

  const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });

  return { user, token };
};

export const logout = async (token) => {
  const decoded = jwt.verify(token, JWT_SECRET);

  await authRepo.addTokenToBlacklist(token, new Date(decoded.exp * 1000));
};
