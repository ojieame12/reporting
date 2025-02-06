/*
  Middleware for input validation.
  Currently includes validation for manual entry endpoint.
*/

function validateManualEntry(req, res, next) {
  const { designerId, date, description, hours, source } = req.body;
  const errors = [];
  if (!designerId) {
      errors.push({ param: 'designerId', msg: 'designerId is required' });
  }
  if (!date) {
      errors.push({ param: 'date', msg: 'date is required' });
  }
  if (!description) {
      errors.push({ param: 'description', msg: 'description is required' });
  }
  if (!hours) {
      errors.push({ param: 'hours', msg: 'hours is required' });
  }
  if (!source) {
      errors.push({ param: 'source', msg: 'source is required' });
  }
  if (errors.length > 0) {
      const error = new Error('Validation Error');
      error.statusCode = 400;
      error.errors = errors;
      return next(error);
  }
  next();
}

const { query } = require('express-validator');
const validateAnalyticsDates = [
  query('startDate').isISO8601().withMessage('Invalid start date format'),
  query('endDate').optional().isISO8601().withMessage('Invalid end date format')
];

module.exports = {
  validateManualEntry,
  validateAnalyticsDates
};
