const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://sujeet6423:Sujeet%409125316423@namastenode.c8rnj.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
