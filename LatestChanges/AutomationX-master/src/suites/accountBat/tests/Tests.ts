import users from './users';
//import chai from 'chai';
import chaiHttp from 'chai-http';
const expect  = require('chai').expect;
//const should  = require('chai').should;
//var assert = require('assert');
//var chai = require('chai');

// chai.use(chaiHttp);
// chai.should();

export class Tests {

   describe ("allusers", () => {
       it('verify the name value present in resposne', () => {
         var result = allusers();
         console.log('value of', result);
         expect.(result).to.contain('Kevin');
       });

      it('verify the name value present in resposne', () => {
         var result = allusers();
         expect.(result).to.have.key('id');
      });
   });
}