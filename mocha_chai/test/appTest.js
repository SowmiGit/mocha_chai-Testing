const assert = require('chai').assert;
const app = require('../app');

 foo = 'bar', 
 beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

assert.typeOf(foo, 'string'); // without optional message
assert.typeOf(foo, 'string', 'foo is a string'); // with optional message
assert.equal(foo, 'bar');
assert.lengthOf(foo, 3);
assert.lengthOf(beverages.tea[0], 4, 'beverages has 3 types of tea');
console.log("value of beverages.tea[0]",beverages.tea[0]);

/*describe('App', function(){
    it('should return hello', function(){   
        assert.equal(app(),sentence[0], 4 ,'hello');
        Console.log("sentense values-->", sentence);
        Console.log("sentense values-->", sentence.words);        
        //equal(app(),"{'Hai','hello','how','r','u'}")
    })
});

/*describe('App', function(){
    it('should return atleast one of the keys', function(){   
        assert.hasAnyKeys(app(),['Hello']);
    })
});*/
 
