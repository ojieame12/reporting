const errorHandler = (err, req, res, next) => {
  console.error(`[${new Date().toISOString()}] Error:`, err);

  // Handle validation errors
  if (err.errors && Array.isArray(err.errors)) {
    return res.status(400).json({
      success: false,
      error: {
        code: 400,
        message: 'Validation Error',
        details: err.errors.map(e => ({ 
          field: e.param, 
          message: e.msg 
        }))
      }
    });
  }

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  
  res.status(statusCode).json({
    success: false,
    error: {
      code: statusCode,
      message: message,
      path: req.path,
      timestamp: new Date().toISOString()
    }
  });
};

module.exports = errorHandler;
