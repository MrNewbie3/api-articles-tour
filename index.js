const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const articleRoutes = require("./api/articles.js");
dotenv.config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/articles", articleRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then((res) => {
    app.listen(process.env.PORT, () => console.log(`app listening on port ${process.env.PORT}! + ${res.connection.db.databaseName}`));
  })
  .catch((err) => {
    console.log(err);
  });
