const express = require('express');
const app = express();
const http = require('http');
const baseurl = 'https://api-stg.trimble.com/t/trimble.com/qa/pulse';

/*module.exports = function(){
    var sentence = ['Hai', 'hello', 'how', 'r', 'u'];
    return sentence;
}*/

var tokenpayload = {
    "oauth2": {
        "grantType": "password",
        "clientId": "oLXcXnpbxq84WLIMKbAgRlHBPq0a",
        "clientSecret": "PteTFNyWMpyog0RlHn5YkVfsVBoa",
        "username": "keytelematicsqamnf@dayrep.com",
        "password": "Password@123"
    }
}

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.write('Hello');
        res.end();
    }

    if(req.url === baseurl+'/token/v5'){
        var options = {
            method : 'POST',
            body: {body:JSON.stringify(resources)}
        }
        return new Promise(function (resolve, reject){
            request(options, function(error, response, body){
                if(error){
                    return reject(error);
                }
                console.log('responseeee body--->', body);
                return resolve(body);
                console.log('responseeee body--->', body);             
            })
        })
    }
});


app.listen(3000, ()=> console.log('Listening 3000 port....'));

    