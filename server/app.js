const express = require("express");
const app = express();
const authRouter = require("./Router/authRoute.js");
const databaseConnect = require("./config/databaseConfig.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");

databaseConnect();

app.use(express.json());
app.use(cookieParser());
const allowedOrigins = ["https://cropcompass.netlify.app"];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests from specified origins and any localhost origins
    if (!origin || allowedOrigins.indexOf(origin) !== -1 || origin.startsWith('http://localhost')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use("/api/auth/", authRouter); 

app.use("/", (req, res) => {
  res.status(200).json({
    data: "Server running.....",
  });
});

module.exports = app;
