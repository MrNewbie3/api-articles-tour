const { default: mongoose } = require("mongoose");
const { Schema } = mongoose;

const articleSchemes = new Schema(
  {
    color: String,
    title: String,
    content: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Article", articleSchemes);
