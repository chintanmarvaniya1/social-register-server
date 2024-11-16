const responseFormatter = (req, res, next) => {
    res.success = (message, status, statusMessage, data) => {
      res.status(status).json({
        status: statusMessage,
        Message: message,
        Data: data,
        metadata: {
          timestamp: new Date().toISOString(),
        }
      });
    };
  
    res.error = (message, status, statusMessage, details) => {
      res.status(status).json({
        status: statusMessage,
        Message: message,
        stack: details,
        metadata: {
          timestamp: new Date().toISOString(),
        }
      });
    };
  
    next();
  };
  
  module.exports = responseFormatter;