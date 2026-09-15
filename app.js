const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./config/database");
const courseRoutes = require("./routes/courseRoutes");
const errorHandler = require("./middleware/errorMiddleware");
const notFound = require("./middleware/notFoundMiddleware");

dotenv.config();

const app = express();

connectDB();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/courses", courseRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});