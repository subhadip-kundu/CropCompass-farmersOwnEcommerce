const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL;

const databaseConnect = () => {
  mongoose
    .connect(MONGO_URL)
    .then((con) => {
      console.log(con.connection.host);
    })
    .catch((err) => console.log(err.message));
};

module.exports = databaseConnect;
