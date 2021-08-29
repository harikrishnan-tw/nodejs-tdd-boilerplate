const TodoRepo = require("../../../src/todo/todo.repo");
const TodoModel = require("../../../src/todo/todo.model");
const newTodo = require("../../mock-data/todo/newTodo.json");

TodoModel.create = jest.fn();
describe("TodoRepo.insertOne", () => {
  it("should contain insertOne function", () => {
    expect(typeof TodoRepo.insertOne).toBe("function");
  });
  it("should have called TodoModel.create function with newTodo", async () => {
    await TodoRepo.insertOne(newTodo);
    expect(TodoModel.create).toBeCalledWith(newTodo);
  });
  it("should return newTodo after insertion", async () => {
    TodoModel.create.mockReturnValue(newTodo);
    const result = await TodoRepo.insertOne(newTodo);
    expect(result).toStrictEqual(newTodo);
  });
  it("should throw exception", async () => {
    const errorMessage = "Method failed execution";
    const rejectedPromise = Promise.reject(new Error(errorMessage));
    TodoModel.create.mockReturnValue(rejectedPromise);
    await expect(TodoRepo.insertOne(newTodo)).rejects.toThrow(errorMessage);
  });
});
