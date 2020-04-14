"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const expect = require('chai').expect;
const assert = require('chai').assert;
const users_1 = require("../setup/users");
const commonclass_1 = require("../commonclass");
describe("allusers", () => {
    it('verify the first index value in a resposne', () => __awaiter(void 0, void 0, void 0, function* () {
        var result = yield users_1.users.allusers();
        expect(result.data.users[0].name).to.equal('Sam Smith');
        //expect(result.data.users[0].email).to.equal('this@gmail.com');
        //Here if first expect getting failed, next case is not running. 
        //expect(result.data.users[0].id).to.equal('ck3fwimui1bqu01234rvazrc0');
    }));
});
it('verify the total array value response', () => __awaiter(void 0, void 0, void 0, function* () {
    var result = yield users_1.users.allusers();
    //Verify the number of array index value in response, total is 0-92! 
    var totoalArray_value = result.data.users[91].name;
    assert.exists(totoalArray_value, 'Value is either equal or not');
}));
it('Verify the email format', () => __awaiter(void 0, void 0, void 0, function* () {
    var result = yield users_1.users.allusers();
    var JsonEmail = commonclass_1.commonclass.emailValidate(result.data.users[0].email);
    assert.exists(JsonEmail, 'Email is not retrieved');
}));
it('Verify the ISO date format', () => __awaiter(void 0, void 0, void 0, function* () {
    var result = yield users_1.users.allusers();
    var createdAt = commonclass_1.commonclass.Datecheck(result.data.users[0].createdAt);
    assert.exists(createdAt, 'Email is not retrieved');
}));
