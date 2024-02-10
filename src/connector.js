require("dotenv").config();

let mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URL;

const connectToMongo = async () => {
  mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("connection established with mongodb server online");
    })
    .catch((err) => {
      console.log("error while connection", err);
    });
};

exports.connection = connectToMongo;
