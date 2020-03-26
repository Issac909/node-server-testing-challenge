const request = require("supertest");

const server = require("../api/server");

describe("pokedex router", function() {
  it("should run the tests", function() {
    expect(true).toBe(true);
  });

  describe("GET /api/pokedex", function() {
    it("should return 200 OK", function() {
      return request(server)
        .get("/api/pokedex")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("should return list of categories", function() {
      return request(server)
        .get("/api/pokedex")
        .then(res => {
          expect(Array.isArray(res.body)).toBe(true);
        });
    });
  });
});