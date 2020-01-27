"use strict";
exports.__esModule = true;
var hello_1 = require("./hello");
var chai_1 = require("chai");
var apollo_boost_1 = require("apollo-boost");
var client = new apollo_boost_1["default"]({
    uri: 'https://graphql.example.com'
});
describe('Hello function', function () {
    it('should return hello world', function () {
        var result = hello_1["default"]();
        chai_1.expect(result).to.equal('Hello World!');
    });
});
describe('Hello function1', function () {
    it('should return hello world', function () {
        var result = hello_1["default"]();
        chai_1.expect(result).to.equal('Hello World!');
    });
});
describe('Hello function1', function () {
    it('should return hello world', function () {
        var result = hello_1["default"]();
        chai_1.expect(result).to.equal('Hello World!');
    });
});
