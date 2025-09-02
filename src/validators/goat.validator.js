import Joi from "joi";

const genderEnum = ["Male", "Female"];

export const createGoatSchema = {
  body: Joi.object({
    codeName: Joi.string().required().messages({
      "string.base": "Kode/Nama kambing harus berupa teks",
      "string.empty": "Kode/Nama kambing tidak boleh kosong",
      "any.required": "Kode/Nama kambing wajib diisi",
    }),
    breederName: Joi.string().allow(null, "").optional().messages({
      "string.base": "Nama breeder harus berupa teks",
    }),
    gender: Joi.string()
      .valid(...genderEnum)
      .required()
      .messages({
        "any.only": 'Jenis kelamin kambing harus "Male" atau "Female"',
        "any.required": "Jenis kelamin kambing wajib diisi",
      }),
    earTagColor: Joi.string().allow(null, "").optional().messages({
      "string.base": "Warna ear tag harus berupa teks",
    }),
    breedLine: Joi.string().allow(null, "").optional().messages({
      "string.base": "Galur/Ras harus berupa teks",
    }),
    healthStatus: Joi.string().allow(null, "").optional().messages({
      "string.base": "Kondisi kesehatan harus berupa teks",
    }),
    vaccineType: Joi.string().allow(null, "").optional().messages({
      "string.base": "Tipe vaksin harus berupa teks",
    }),
    vaccinationDate: Joi.date().iso().allow(null).optional().messages({
      "date.base": "Tanggal vaksin harus berupa tanggal valid",
      "date.format": "Format tanggal vaksin tidak valid (YYYY-MM-DD)",
    }),
    healthNotes: Joi.string().allow(null, "").optional().messages({
      "string.base": "Catatan kesehatan harus berupa teks",
    }),

    goatType: Joi.string().allow(null, "").optional().messages({
      "string.base": "Jenis kambing harus berupa teks",
    }),
    currentWeight: Joi.number().allow(null).optional().messages({
      "number.base": "Bobot terkini harus berupa angka",
    }),
    weightDate: Joi.date().iso().allow(null).optional().messages({
      "date.base": "Tanggal timbang harus berupa tanggal valid",
      "date.format": "Format tanggal timbang tidak valid (YYYY-MM-DD)",
    }),
    grade: Joi.string().allow(null, "").optional().messages({
      "string.base": "Grade harus berupa teks",
    }),
    color: Joi.string().allow(null, "").optional().messages({
      "string.base": "Warna harus berupa teks",
    }),
    sireBreed: Joi.string().allow(null, "").optional().messages({
      "string.base": "Ras pejantan harus berupa teks",
    }),
    damBreed: Joi.string().allow(null, "").optional().messages({
      "string.base": "Ras induk harus berupa teks",
    }),
    birthType: Joi.string().allow(null, "").optional().messages({
      "string.base": "Tipe kelahiran harus berupa teks",
    }),
    birthWeight: Joi.number().allow(null).optional().messages({
      "number.base": "Bobot lahir harus berupa angka",
    }),
    birthDate: Joi.date().iso().allow(null).optional().messages({
      "date.base": "Tanggal lahir harus berupa tanggal valid",
      "date.format": "Format tanggal lahir tidak valid (YYYY-MM-DD)",
    }),
    releaseDate: Joi.date().iso().allow(null).optional().messages({
      "date.base": "Tanggal pelepasan harus berupa tanggal valid",
      "date.format": "Format tanggal pelepasan tidak valid (YYYY-MM-DD)",
    }),
    salesNotes: Joi.string().allow(null, "").optional().messages({
      "string.base": "Catatan penjualan harus berupa teks",
    }),
  }),
};

export const updateGoatSchema = {
  body: Joi.object({
    codeName: Joi.string().optional().messages({
      "string.base": "Kode/Nama kambing harus berupa teks",
      "string.empty": "Kode/Nama kambing tidak boleh kosong",
    }),
    breederName: Joi.string().allow(null, "").optional().messages({
      "string.base": "Nama breeder harus berupa teks",
    }),
    gender: Joi.string()
      .valid(...genderEnum)
      .optional()
      .messages({
        "any.only": 'Jenis kelamin kambing harus "Male" atau "Female"',
      }),
    earTagColor: Joi.string().allow(null, "").optional().messages({
      "string.base": "Warna ear tag harus berupa teks",
    }),
    breedLine: Joi.string().allow(null, "").optional().messages({
      "string.base": "Galur/Ras harus berupa teks",
    }),
    healthStatus: Joi.string().allow(null, "").optional().messages({
      "string.base": "Kondisi kesehatan harus berupa teks",
    }),
    vaccineType: Joi.string().allow(null, "").optional().messages({
      "string.base": "Tipe vaksin harus berupa teks",
    }),
    vaccinationDate: Joi.date().iso().allow(null).optional().messages({
      "date.base": "Tanggal vaksin harus berupa tanggal valid",
      "date.format": "Format tanggal vaksin tidak valid (YYYY-MM-DD)",
    }),
    healthNotes: Joi.string().allow(null, "").optional().messages({
      "string.base": "Catatan kesehatan harus berupa teks",
    }),

    goatType: Joi.string().allow(null, "").optional().messages({
      "string.base": "Jenis kambing harus berupa teks",
    }),
    currentWeight: Joi.number().allow(null).optional().messages({
      "number.base": "Bobot terkini harus berupa angka",
    }),
    weightDate: Joi.date().iso().allow(null).optional().messages({
      "date.base": "Tanggal timbang harus berupa tanggal valid",
      "date.format": "Format tanggal timbang tidak valid (YYYY-MM-DD)",
    }),
    grade: Joi.string().allow(null, "").optional().messages({
      "string.base": "Grade harus berupa teks",
    }),
    color: Joi.string().allow(null, "").optional().messages({
      "string.base": "Warna harus berupa teks",
    }),
    sireBreed: Joi.string().allow(null, "").optional().messages({
      "string.base": "Ras pejantan harus berupa teks",
    }),
    damBreed: Joi.string().allow(null, "").optional().messages({
      "string.base": "Ras induk harus berupa teks",
    }),
    birthType: Joi.string().allow(null, "").optional().messages({
      "string.base": "Tipe kelahiran harus berupa teks",
    }),
    birthWeight: Joi.number().allow(null).optional().messages({
      "number.base": "Bobot lahir harus berupa angka",
    }),
    birthDate: Joi.date().iso().allow(null).optional().messages({
      "date.base": "Tanggal lahir harus berupa tanggal valid",
      "date.format": "Format tanggal lahir tidak valid (YYYY-MM-DD)",
    }),
    releaseDate: Joi.date().iso().allow(null).optional().messages({
      "date.base": "Tanggal pelepasan harus berupa tanggal valid",
      "date.format": "Format tanggal pelepasan tidak valid (YYYY-MM-DD)",
    }),
    salesNotes: Joi.string().allow(null, "").optional().messages({
      "string.base": "Catatan penjualan harus berupa teks",
    }),
  }),
};
