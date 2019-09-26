//core imports
const express = require("express");

// local modules
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

// server
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// run server
app.listen(port, () => console.log("Server started at port " + port));
