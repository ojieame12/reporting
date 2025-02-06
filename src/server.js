const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware to parse JSON bodies.
app.use(express.json());

// Serve static files from public directory
app.use(express.static(path.join(__dirname, '../public')));

// Import routes
const authRoutes = require('./routes/auth');
const manualEntryRoutes = require('./routes/manualEntry');
const jiraRoutes = require('./routes/jira');
const figmaRoutes = require('./routes/figma');
const analyticsRoutes = require('./routes/analytics');
const exportRoutes = require('./routes/export');

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Mount routes
app.use('/api/auth', authRoutes);
app.use('/api/manual-entry', manualEntryRoutes);
app.use('/api/jira', jiraRoutes);
app.use('/api/figma', figmaRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api', exportRoutes); // exportRoutes handles /export-csv endpoint
const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);

// Export app for testing
module.exports = app;

// Only listen when not in test environment
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Also available on http://0.0.0.0:${PORT}`);
    console.log('Environment:', process.env.NODE_ENV || 'development');
  });
}
