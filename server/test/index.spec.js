const request = require("supertest");
const chai = require('chai')
var expect = chai.expect
const app = require("../server");

describe("GET /", function() {
  it("it should have status code 200", function(done) {
    request(app)
      .get("/")
      .expect(200)
      .end(function(err, res){
        if (err) done(err);
        done();
      });
  });
});

describe('POST /post', function() {
  
  it('should pass form data, respond with 200 status and return the correct single median prime number', async () => {
    await request(app)
      .post('/post')
      .set("accept", "application/json")
      .send({ num: 10 })
      .expect(200)
      .then((res) => {
        expect(res.text).equal("Your Median Prime Number is: 7");
      });

    });
  });

  describe('POST /post', function() {
  
    it('should pass form data, respond with 200 status and return the correct multiple median prime number', async () => {
      await request(app)
        .post('/post')
        .set("accept", "application/json")
        .send({ num: 360 })
        .expect(200)
        .then((res) => {
          expect(res.text).equal("Your Median Prime Numbers are: 173,179");
        });
  
      });
    });
