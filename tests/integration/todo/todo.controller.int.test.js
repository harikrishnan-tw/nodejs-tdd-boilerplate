const request = require("supertest");
const app = require("../../../app");
const newTodo = require("../../mock-data/todo/newTodo.json");
const mongodb= require("../../../db/mongodb.connect");

const endpointUrl = "/todos/";

beforeAll(async () => {
    await mongodb.connect();
});

describe(endpointUrl, () => {
    it("POST " + endpointUrl, async () => {
      const response = await request(app)
        .post(endpointUrl)
        .send(newTodo);
      expect(response.statusCode).toBe(201);
      expect(response.body.title).toBe(newTodo.title);
      expect(response.body.done).toBe(newTodo.done);
    });
  });

afterAll(async () => {
    await mongodb.closeAndDisconnect();
});