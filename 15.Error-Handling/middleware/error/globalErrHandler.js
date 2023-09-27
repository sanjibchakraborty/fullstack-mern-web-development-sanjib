// Full list of http status code
// https://umbraco.com/knowledge-base/http-status-codes

const globalErrHandler = (err, req, res, next) => {
  console.log(err.statusCode);
  //status code //404
  const statusCode = err.statusCode || 500;
  //status: 'failed/success
  const status = err.status;
  //message
  const message = err.message;
  å;
  res.status(statusCode).json({
    status,
    message,
    stack: err.stack,
  });
};

module.exports = globalErrHandler;
