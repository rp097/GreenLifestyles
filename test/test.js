//let serv = require('../server.js');
//var sop = require('../public/js/scripts.js');
var expect  = require("chai").expect;
var request = require("request");




describe("Landing Page Test Cases", function() {
    var url = "http://localhost:8080";
    it("returns status 200 if success", function(done) {
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done()
          });
    });
    
    /*it("returns statusCode key in body to check if api give right result should be 200", function(done) {
        request(url, function(error, response, body) {
            body = $.statusCode('#register.primary-button');
            console.log(body)
            expect(body.statusCode).to.equal(200);
            done()
          });
    });
    it("returns the result as number", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.result).to.be.a('number');
            done()
          });
    });
    it("returns the result equal to 8", function(done) {
      request(url, function(error, response, body) {
          body = JSON.parse(body)
          expect(body.result).to.equal(8);
          done()
        });
  });
  it("returns the result not equal to 15", function(done) {
    request(url, function(error, response, body) {
        body = JSON.parse(body)
        expect(body.result).to.not.equal(15);
        done()
      });
});*/
  });

  describe("Sign Up Page Test Cases", function() {
    var url = "http://localhost:8080/signupoptions.html";
    it("returns status 200 if page loads", function(done) {
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done()
          });
    });
});





