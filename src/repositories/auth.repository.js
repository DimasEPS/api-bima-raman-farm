import prisma from '../config/prisma.js';

export const findUserByEmailOrUsername = async (identifier) => {
  return prisma.users.findFirst({
    where: {
      OR: [{ email: identifier }, { username: identifier }],
    },
  });
};

export const createUser = async (data) => {
  return prisma.users.create({ data });
};

export const isEmailOrUsernameTaken = async (email, username) => {
  return prisma.users.findFirst({
    where: {
      OR: [{ email }, { username }],
    },
  });
};

export const addTokenToBlacklist = async (token, expiredAt) => {
  return prisma.tokenBlacklist.create({
    data: {
      token,
      expiredAt,
    },
  });
};

export const isTokenBlacklisted = async (token) => {
  return prisma.tokenBlacklist.findUnique({
    where: { token },
  });
};
