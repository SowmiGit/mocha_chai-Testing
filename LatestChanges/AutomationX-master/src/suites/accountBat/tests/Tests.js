"use strict";
exports.__esModule = true;
var expect = require('chai').expect;
//const should  = require('chai').should;
//var assert = require('assert');
//var chai = require('chai');
// chai.use(chaiHttp);
// chai.should();
var Tests = /** @class */ (function () {
    function Tests() {
    }
    Tests.prototype.describe = function () { };
    return Tests;
}());
exports.Tests = Tests;
(function () {
    it('verify the name value present in resposne', function () {
        var result = allusers();
        console.log('value of', result);
        expect.(result).to.contain('Kevin');
    });
    it('verify the name value present in resposne', function () {
        var result = allusers();
        expect.(result).to.have.key('id');
    });
});
;
