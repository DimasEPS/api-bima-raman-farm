import * as goatService from '../services/goat.service.js';
import { successResponse, paginatedResponse } from '../utils/response.util.js';

export const createGoat = async (req, res, next) => {
  try {
    const goat = await goatService.createGoat(req.body);
    return successResponse(res, 201, 'Kambing berhasil ditambahkan', goat);
  } catch (err) {
    next(err);
  }
};

export const getAllGoats = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || '';

    // Ambil filter dari query string
    const filters = {
      gender: req.query.gender,
      breedLine: req.query.breedLine,
      goatType: req.query.goatType,
    };

    const { data, total } = await goatService.getAllGoats(page, limit, search, filters);

    const meta = {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    };

    return paginatedResponse(res, 'Data kambing berhasil diambil', data, meta);
  } catch (err) {
    next(err);
  }
};

export const getGoatDetail = async (req, res, next) => {
  try {
    const goat = await goatService.getGoatDetail(Number(req.params.id));
    return successResponse(res, 200, 'Detail kambing berhasil diambil', goat);
  } catch (err) {
    next(err);
  }
};

export const updateGoat = async (req, res, next) => {
  try {
    const goat = await goatService.updateGoat(Number(req.params.id), req.body);
    return successResponse(res, 200, 'Data kambing berhasil diperbarui', goat);
  } catch (err) {
    next(err);
  }
};

export const deleteGoat = async (req, res, next) => {
  try {
    await goatService.deleteGoat(Number(req.params.id));
    return successResponse(res, 200, 'Data kambing berhasil dihapus');
  } catch (err) {
    next(err);
  }
};

export const generateGoatQRCode = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const qrData = await goatService.generateGoatQRCode(id);
    return res.status(200).json({
      status: 'success',
      message: 'QR code berhasil dibuat',
      data: qrData,
    });
  } catch (err) {
    next(err);
  }
};
