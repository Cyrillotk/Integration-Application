const errorHandler = (error, req, res, next) => {
  console.error(error);

  res.status(500).render("error", {
    message: error.message || "Something went wrong"
  });
};

module.exports = errorHandler;