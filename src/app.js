import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.route.js';
// import goatRoutes from './routes/goat.route.js';
import { notFoundHandler, globalErrorHandler } from './middleware/error.middleware.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
// app.use('/api/goat', goatRoutes);

// 404 Handler
app.use(notFoundHandler);

// Global Error Handler
app.use(globalErrorHandler);

export default app;
