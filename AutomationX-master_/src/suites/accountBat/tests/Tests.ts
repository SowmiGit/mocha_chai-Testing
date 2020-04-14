const expect = require('chai').expect;
const assert = require('chai').assert;

import { users } from '../setup/users';
import { commonclass } from '../commonclass';

describe("allusers", () => { 
   it('verify the first index value in a resposne', async () => {     
      var result = await users.allusers();         
      expect(result.data.users[0].name).to.equal('Sam Smith');
      //expect(result.data.users[0].email).to.equal('this@gmail.com');
      //Here if first expect getting failed, next case is not running. 
      //expect(result.data.users[0].id).to.equal('ck3fwimui1bqu01234rvazrc0');
   });    
});

it('verify the total array value response', async() => {
   var result = await users.allusers();  
   //Verify the number of array index value in response, total is 0-92! 
   var totoalArray_value = result.data.users[91].name;
   assert.exists(totoalArray_value, 'Value is either equal or not');
    })
it('Verify the email format', async() => {
   var result = await users.allusers();
   var JsonEmail = commonclass.emailValidate(result.data.users[0].email);  
   assert.exists(JsonEmail, 'Email is not retrieved');
})
   it('Verify the ISO date format', async() => {
      var result = await users.allusers();
      var createdAt = commonclass.Datecheck(result.data.users[0].createdAt);  
      assert.exists(createdAt, 'Email is not retrieved');
 })

