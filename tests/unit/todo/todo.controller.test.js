const httpMocks = require("node-mocks-http");
const TodoController = require("../../../src/todo/todo.controller");
const TodoService = require("../../../src/todo/todo.service");
const newTodo = require("../../mock-data/todo/newTodo.json");

let req, res, next;

TodoService.insertTodo = jest.fn();

beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = jest.fn();
});

describe("TodoController.addTodo", () => {
  beforeEach(() => {
    req.body = newTodo;
  });
  it("should contain CreateToDo function", () => {
    expect(typeof TodoController.addTodo).toBe("function");
  });
  it("should call insertTodo function with new todo item", async () => {
    await TodoController.addTodo(req, res, next);
    expect(TodoService.insertTodo).toBeCalledWith(req.body);
  });
  it("should return 201 status code", async () => {
    await TodoController.addTodo(req, res, next);
    expect(res.statusCode).toBe(201);
  });
  it("should completely return after execution", async () => {
    await TodoController.addTodo(req, res, next);
    expect(res._isEndCalled()).toBeTruthy();
    // this test checks if something is returned as response
  });
  it("should return response as json", async () => {
    TodoService.insertTodo.mockReturnValue(newTodo);
    await TodoController.addTodo(req, res, next);
    expect(res._getJSONData()).toStrictEqual(newTodo);
  });
  it("should handle errors", async () => {
    const errorMessage = { message: "Any property missing" };
    const rejectedPromise = Promise.reject(errorMessage);
    TodoService.insertTodo.mockReturnValue(rejectedPromise);
    await TodoController.addTodo(req, res, next);
    expect(next).toHaveBeenCalledWith(errorMessage);
  });
});
