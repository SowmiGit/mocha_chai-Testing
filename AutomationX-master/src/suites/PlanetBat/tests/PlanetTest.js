"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var chai_http_1 = require("chai-http");
var expect = require('chai').expect;
var should = require('chai').should;
chai_1["default"].use(chai_http_1["default"]);
chai_1["default"].should();
describe("Planet", function () {
    describe("GET name of the planet", function () {
        //Test the name of the planet status
        it("should be a string", function (done) {
            chai_1["default"].request(Planet)
                .get('/')
                .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.a('String');
                done();
            });
        });
        //Test the name of the planet status 
        it("should be a string", function (done) {
            chai_1["default"].request(Planet)
                .get('/')
                .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.a('Int');
                done();
            });
        });
    });
});
exports["default"] = PlanetTest;
