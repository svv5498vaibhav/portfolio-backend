const express = require('express');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');

// Import routes
const projectRoutes = require('./routes/projectRoutes');
const achievementRoutes = require('./routes/achievementRoutes');
const contactRoutes = require('./routes/contactRoutes');
const statsRoutes = require('./routes/statsRoutes');

const app = express();

// Middleware
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://newportfolio-omega-navy.vercel.app'
  ],
  credentials: true
}));

app.use(express.json());

// API routing prefix
const API_PREFIX = '/api';

// Routes
app.use(`${API_PREFIX}/projects`, projectRoutes);
app.use(`${API_PREFIX}/achievements`, achievementRoutes);
app.use(`${API_PREFIX}/contact`, contactRoutes);
app.use(`${API_PREFIX}/stats`, statsRoutes);

// Catch-all 404 handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: `API Route Not Found: ${req.originalUrl}`
  });
});

// Global Error Handler
app.use(errorHandler);

module.exports = app;
