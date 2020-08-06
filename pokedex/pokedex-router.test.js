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
          expect(res.statusCode).toBe(200);
        });
    });

    it("should return an array of pokemon names", function() {
      return request(server)
        .get("/api/pokedex")
        .then(res => {
          expect(Array.isArray(res.body)).toBe(true);
        });
    });
  });

  describe('POST /api/pokedex/', function() {
    it('should create Fakemon', async() => {
      const res = await request(server)
        .post('/api/posts')
        .send({
          id: 2,
          
          name: 'Venasaur',
          type1: 7,
          type2: 12,
          userId: 1
        })
        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty('post')
    })
  })

//   describe("GET /api/pokedex/types", function() {
//     let token;

//     beforeEach(() => {
//       return request(server)
//       .post('/api/auth/login', {
//         body: JSON.stringify({
//           username: 'Ash Catchum',
//           password:'admin',
//         })
//       })
//       .then(res => {
//         console.log(res.body);
//         token = res.token;
//       })
//       .catch(err => console.log(err.message))
//     })

//     it("should return with status 200", function() {
//       return request(server)
//         .get("/api/pokedex/types", {
//           headers: {
//             'Authorization': token
//           }
//         })
//         .then(res => {
//           // console.log(token);
//           expect(res.status).toBe(200);
//         });
//     });
//   });

});
