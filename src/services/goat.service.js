import { ApiError } from '../utils/apiError.util.js';
import * as goatRepo from '../repositories/goat.repository.js';
import QRCode from 'qrcode';

export const createGoat = async (data) => {
  return goatRepo.createGoat(data);
};

export const getAllGoats = async (page = 1, limit = 10, search = '', filters = {}) => {
  const skip = (page - 1) * limit;
  const take = limit;
  return goatRepo.getAllGoats(skip, take, search, filters);
};

export const getGoatDetail = async (id) => {
  const goat = await goatRepo.getGoatById(id);
  if (!goat) throw new ApiError(404, 'Data kambing tidak ditemukan');
  return goat;
};

export const updateGoat = async (id, data) => {
  const goat = await goatRepo.getGoatById(id);
  if (!goat) throw new ApiError(404, 'Data kambing tidak ditemukan');
  return goatRepo.updateGoat(id, data);
};

export const deleteGoat = async (id) => {
  const goat = await goatRepo.getGoatById(id);
  if (!goat) throw new ApiError(404, 'Data kambing tidak ditemukan');
  return goatRepo.deleteGoat(id);
};

export const generateGoatQRCode = async (id) => {
  const goat = await goatRepo.getGoatById(id);
  if (!goat) throw new ApiError(404, 'Data kambing tidak ditemukan');

  const frontendUrl = `${process.env.URL_FE}${id}`;
  const qrBase64 = await QRCode.toDataURL(frontendUrl);

  return {
    id,
    qrCode: qrBase64,
    link: frontendUrl,
  };
};
