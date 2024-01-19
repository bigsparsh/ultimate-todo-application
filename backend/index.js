const cors = require("cors");
const express = require("express");
const app = express();
const port = 3000;

const todoRouter = require("./routes/todo");

app.use(cors());
app.use(express.json());

app.use("/todo", todoRouter);

app.listen(port);
