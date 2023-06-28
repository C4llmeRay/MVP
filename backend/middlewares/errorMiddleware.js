// Middleware to handle errors
exports.errorHandler = (err, req, res, next) => {
    console.error(err.stack);
  
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode).json({ error: err.message });
  };
  