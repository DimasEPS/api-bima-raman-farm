import * as authService from '../services/auth.service.js';
import { successResponse } from '../utils/response.util.js';

export const register = async (req, res, next) => {
  try {
    const user = await authService.register(req.body);
    return successResponse(res, 201, 'Registrasi berhasil', {
      id: user.id,
      username: user.username,
      email: user.email,
      name: user.name,
    });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { user, token } = await authService.login(req.body);
    return successResponse(res, 200, 'Login berhasil', {
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    next(err);
  }
};

export const logout = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(400).json({
        status: 'fail',
        message: 'Token tidak ditemukan',
      });
    }

    await authService.logout(token);
    return successResponse(res, 200, 'Logout berhasil');
  } catch (err) {
    next(err);
  }
};

export const changePassword = async (req, res, next) => {
  try {
    const userId = Number(req.user.id);
    const { oldPassword, newPassword } = req.body;
    await authService.changePassword(userId, oldPassword, newPassword);
    return successResponse(res, 200, 'Password berhasil diganti');
  } catch (err) {
    next(err);
  }
};
