const TodoService = require("./todo.service");

exports.addTodo = async (req, res, next) => {
  try {
    const createModel = await TodoService.insertTodo(req.body);
    res.status(201).json(createModel);
  } catch (e) {
    next(e);
  }
};
