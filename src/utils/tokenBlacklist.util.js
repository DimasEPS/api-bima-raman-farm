import prisma from '../config/prisma.js';

export const addToBlacklist = async (token, expiredAt) => {
  await prisma.blacklistedToken.create({
    data: { token, expiredAt },
  });
};

export const isBlacklisted = async (token) => {
  const exists = await prisma.blacklistedToken.findUnique({
    where: { token },
  });
  return !!exists;
};
