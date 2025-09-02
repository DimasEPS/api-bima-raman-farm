import prisma from "../config/prisma.js";

export const createGoat = async (data) => {
  return prisma.goat.create({ data });
};

export const getAllGoats = async (skip, take, search, filters) => {
  const where = {};

  if (search) {
    where.OR = [
      { codeName: { contains: search, mode: "insensitive" } },
      { breederName: { contains: search, mode: "insensitive" } },
      { breedLine: { contains: search, mode: "insensitive" } },
      { earTagColor: { contains: search, mode: "insensitive" } },
      { healthNotes: { contains: search, mode: "insensitive" } },
      { vaccineType: { contains: search, mode: "insensitive" } },
    ];
  }

  // Example: filters = { gender, breedLine, goatType, earTagColor, healthStatus, vaccineType }
  if (filters.gender) where.gender = filters.gender;
  if (filters.breedLine) where.breedLine = filters.breedLine;
  if (filters.goatType) where.goatType = filters.goatType;
  if (filters.earTagColor) where.earTagColor = filters.earTagColor;
  if (filters.healthStatus) where.healthStatus = filters.healthStatus;
  if (filters.vaccineType) where.vaccineType = filters.vaccineType;

  // Handle vaccination date range filtering
  if (filters.vaccinationDateStart && filters.vaccinationDateEnd) {
    where.vaccinationDate = {
      gte: new Date(filters.vaccinationDateStart),
      lte: new Date(filters.vaccinationDateEnd),
    };
  } else if (filters.vaccinationDateStart) {
    where.vaccinationDate = {
      gte: new Date(filters.vaccinationDateStart),
    };
  } else if (filters.vaccinationDateEnd) {
    where.vaccinationDate = {
      lte: new Date(filters.vaccinationDateEnd),
    };
  }

  const [data, total] = await Promise.all([
    prisma.goat.findMany({
      where,
      skip,
      take,
      orderBy: { createdAt: "desc" },
    }),
    prisma.goat.count({ where }),
  ]);
  return { data, total };
};

export const getGoatById = async (id) => {
  return prisma.goat.findUnique({ where: { id } });
};

export const updateGoat = async (id, data) => {
  return prisma.goat.update({ where: { id }, data });
};

export const deleteGoat = async (id) => {
  return prisma.goat.delete({ where: { id } });
};

export const findByCodeName = async (codeName) => {
  const goat = await prisma.goat.findUnique({
    where: { codeName },
  });
  if (!goat) {
    throw new ApiError(404, "Data kambing tidak ditemukan");
  }
  return goat;
};
