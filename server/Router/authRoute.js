const express = require("express");
const { signup, signin, getUser, logout, updateAddress, getAddress } = require("../Controller/authController");
const jwtAuth = require("../middleware/jwtAuth");
const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/signin", signin);
authRouter.get("/user", jwtAuth, getUser);
authRouter.get("/logout", jwtAuth, logout);
authRouter.put('/address', jwtAuth, updateAddress);
authRouter.get('/address', jwtAuth, getAddress);

module.exports = authRouter;
