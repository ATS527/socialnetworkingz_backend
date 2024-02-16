const userRouter = require('express').Router();

const { createuser, getPaginatedUsers, getUser, getUsers } = require("../controllers/user_controller");

const authenticate = require("../middleware/auth");

userRouter.post("/createuser", authenticate, createuser);

userRouter.get("/getuser/:id", authenticate, getUser);

userRouter.get("/getusers", authenticate, getUsers);

userRouter.get("/getpaginatedusers", authenticate, getPaginatedUsers);

module.exports = userRouter;