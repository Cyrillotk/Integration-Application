const notFound = (req, res) => {
  res.status(404).render("error", {
    message: "Page not found"
  });
};

module.exports = notFound;