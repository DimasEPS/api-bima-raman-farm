// Success
export const successResponse = (res, statusCode = 200, message, data = {}) => {
  return res.status(statusCode).json({
    status: 'success',
    message,
    data,
  });
};

// Error
export const errorResponse = (res, statusCode = 500, message) => {
  return res.status(statusCode).json({
    status: 'error',
    message,
  });
};

// Pagination
export const paginatedResponse = (res, message, data, meta) => {
  return res.status(200).json({
    status: 'success',
    message,
    data,
    meta,
  });
};
