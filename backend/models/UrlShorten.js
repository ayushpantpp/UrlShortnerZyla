const mongoose = require("mongoose");
const { Schema } = mongoose;
const urlShortenSchema = new Schema({
  originalUrl: String,
  urlCode: String,
  shortUrl: String
});
mongoose.model("UrlShorten", urlShortenSchema);