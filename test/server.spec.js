// Imports the server.js file to be tested.
const server = require("../server");
// Assertion (Test Driven Development) and Should,  Expect(Behaviour driven 
// development) library
const chai = require("chai");
// Chai HTTP provides an interface for live integration testing of the API's.
const chaiHttp = require("chai-http");
const { options } = require("superagent");
const { request } = require("chai");
chai.should();
chai.use(chaiHttp);
const { assert, expect } = chai;

describe("Server!", () => {
  // Sample test case given to test / endpoint.
  it("Returns the default welcome message", (done) => {
    chai
      .request(server)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        assert.strictEqual(res.body.message, "Welcome!");
        done();
      });
  });

  // ===========================================================================
  // TODO: Please add your test cases for part A here.
  it('It should be a non-empty array', (done) => {
    chai.request(server)
      .get('/operations')
      .end((err, res) => {
        res.should.have.status(200); 
        res.body.should.be.a('array');
        expect(res.body).that.is.not.empty;
        done(); 
      });
  });

  it('It should get details given id', (done) => { 
    const eid = 1; 
    chai.request(server)
    .get("/operations/" + eid)
    .end((err, res) => {
      res.should.have.status(200); 
      res.body.should.have.property('id').eq(1); 
      res.body.should.have.property('name');  
      res.body.should.have.property('sign'); 
      done();
    });
  });


  it('It should post a new operation and have correct properties', (done) => {
    const newobject = {
      id: options.length + 1,
      name: "divide",
      sign: "/" 
    };
    chai.request(server) 
    .post("/operations/")
    .send(newobject)
    .end((err, res) => {
      res.should.have.status(201); 
      res.body.should.have.property('id').eq(4);
      res.body.should.have.property('name').eq('divide');
      res.body.should.have.property('sign').eq('/'); 
      done();
    });
  }); 


  

  // ===========================================================================
  // TODO: Please add your test cases for part B here.




});
