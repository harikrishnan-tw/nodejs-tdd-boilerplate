const express = require("express");
const TodoController = require("../src/todo/todo.controller");

const router = express.Router();

router.post("/", TodoController.addTodo);

module.exports = router;
