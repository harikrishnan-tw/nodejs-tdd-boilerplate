const TodoRepo = require("./todo.repo");

exports.insertTodo = async (newTodo) => {
  try {
    return await TodoRepo.insertOne(newTodo);
  } catch (e) {
    throw e;
  }
};
