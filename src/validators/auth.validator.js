import Joi from 'joi';

export const registerSchema = {
  body: Joi.object({
    username: Joi.string().required().messages({
      'string.empty': 'Username tidak boleh kosong',
      'any.required': 'Username wajib diisi',
    }),
    email: Joi.string().email().required().messages({
      'string.email': 'Email harus berupa email yang valid',
      'string.empty': 'Email tidak boleh kosong',
      'any.required': 'Email wajib diisi',
    }),
    name: Joi.string().required().messages({
      'string.empty': 'Nama tidak boleh kosong',
      'any.required': 'Nama wajib diisi',
    }),
    password: Joi.string().min(6).required().messages({
      'string.min': 'Password minimal 6 karakter',
      'string.empty': 'Password tidak boleh kosong',
      'any.required': 'Password wajib diisi',
    }),
  }),
};

export const loginSchema = {
  body: Joi.object({
    identifier: Joi.string().required().messages({
      'string.empty': 'Email atau username wajib diisi',
      'any.required': 'Email atau username wajib diisi',
    }),
    password: Joi.string().required().messages({
      'string.empty': 'Password wajib diisi',
      'any.required': 'Password wajib diisi',
    }),
  }),
};

export const changePasswordSchema = {
  body: Joi.object({
    oldPassword: Joi.string().required().messages({
      'string.empty': 'Password lama wajib diisi',
      'any.required': 'Password lama wajib diisi',
    }),
    newPassword: Joi.string().min(6).required().messages({
      'string.min': 'Password baru minimal 6 karakter',
      'string.empty': 'Password baru wajib diisi',
      'any.required': 'Password baru wajib diisi',
    }),
    confirmNewPassword: Joi.string().valid(Joi.ref('newPassword')).required().messages({
      'any.only': 'Konfirmasi password baru tidak sesuai',
      'string.empty': 'Konfirmasi password baru wajib diisi',
      'any.required': 'Konfirmasi password baru wajib diisi',
    }),
  }),
};
