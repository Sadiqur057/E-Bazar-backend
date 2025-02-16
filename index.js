const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
const authRoutes = require("./src/routes/authRoutes");
const productRoutes = require("./src/routes/productRoutes");

app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);

if (require.main === module) {
  connectDB();
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

module.exports = app;
