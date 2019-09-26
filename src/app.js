//core imports
const express = require("express");

// local modules
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

// server
const app = express();

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

module.exports = app;
