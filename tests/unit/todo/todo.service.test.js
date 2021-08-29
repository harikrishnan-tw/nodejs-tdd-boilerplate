const TodoService = require("../../../src/todo/todo.service");
const TodoRepo = require("../../../src/todo/todo.repo");
const newTodo = require("../../mock-data/todo/newTodo.json");
const { request } = require("express");

TodoRepo.insertOne = jest.fn();
describe("TodoService.insertTodo", () => {
  it("should contain insertTodo function", () => {
    expect(typeof TodoService.insertTodo).toBe("function");
  });
  it("should have called TodoRepo.insertOne function with newTodo", async () => {
    await TodoService.insertTodo(newTodo);
    expect(TodoRepo.insertOne).toBeCalledWith(newTodo);
  });
  it("should return newTodo after insertion", async () => {
    TodoRepo.insertOne.mockReturnValue(newTodo);
    const result = await TodoService.insertTodo(newTodo);
    expect(result).toStrictEqual(newTodo);
  });
  it("should throw exception", async () => {
    const errorMessage = "Method failed execution";
    const rejectedPromise = Promise.reject(new Error(errorMessage));
    TodoRepo.insertOne.mockReturnValue(rejectedPromise);
    await expect(TodoService.insertTodo(newTodo)).rejects.toThrow(errorMessage);
  });
});
