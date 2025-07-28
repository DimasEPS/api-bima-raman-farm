import { ApiError } from '../utils/apiError.util.js';
import { errorResponse } from '../utils/response.util.js';

export const notFoundHandler = (req, res, next) => {
  const err = new ApiError(404, `Route ${req.originalUrl} not found`);
  next(err);
};

export const globalErrorHandler = (err, req, res, next) => {
  // console.error(err);

  const status = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  return errorResponse(res, status, message);
};
