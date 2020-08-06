const request = require("supertest");

const server = require("../api/server");

describe("users", function() {
  it("should run the tests", function() {
    expect(true).toBe(true);
  });

  describe("GET /api/users/logout - logout the current user", function() {
    it("should return 200 OK", function() {
      return request(server)
        .get("/api/users/logout")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("should return list of users", function() {
      return request(server)
        .get("/api/users")
        .then(res => {
          expect(Array.isArray(res.body)).toBe(true);
        });
    });
  });
});