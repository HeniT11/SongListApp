module.exports = function (err, req, res, next) {
  res.status(500).json({
    error: { message: "Something went wrong", description: err?.type },
  });
};
