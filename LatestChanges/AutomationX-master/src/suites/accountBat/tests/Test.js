"use strict";
exports.__esModule = true;
var users_1 = require("./users");
var expect = require('chai').expect;
var should = require('chai').should;
var assert = require('assert');
var Tests = /** @class */ (function () {
    function Tests() {
    }
    Tests.prototype.describe = function () { };
    return Tests;
}());
exports.Tests = Tests;
(function () {
    it('verify the name value present in resposne', function () {
        var result = users_1["default"]();
        console.log('value of', result);
        expect.(result).to.contain('Kevin');
    });
    it('verify the name value present in resposne', function () {
        var result = users_1["default"]();
        expect.(result).to.have.key('id');
    });
});
;
