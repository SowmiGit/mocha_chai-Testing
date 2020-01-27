"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
// import hello from './hello';
// import { expect } from 'chai';
var apollo_boost_1 = require("apollo-boost");
var apollo_boost_2 = require("apollo-boost");
var apollo_server_1 = require("apollo-server");
var apollo_link_http_1 = require("apollo-link-http");
var users = /** @class */ (function () {
    function users() {
    }
    users.init = function () {
        this.client
            .query({
            query: this.allusers
        })
            .then(function (data) {
            console.log(data);
        })["catch"](function (error) {
            console.error(error);
        });
    };
    users.client = new apollo_boost_1["default"]({
        link: apollo_link_http_1.createHttpLink({ uri: 'https://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex' }),
        cache: new apollo_boost_2.InMemoryCache()
    });
    users.allusers = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  {\n    get {\n      userid: ID\n      name: String,\n    }\n  }"], ["\n  {\n    get {\n      userid: ID\n      name: String,\n    }\n  }"])));
    return users;
}());
exports.users = users;
users.init();
var templateObject_1;
