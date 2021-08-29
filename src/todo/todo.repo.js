const TodoModel = require("./todo.model");

exports.insertOne = async (newTodo) => {
  try {
    return await TodoModel.create(newTodo);
  } catch (e) {
    throw e;
  }
};
