"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
// import hello from './hello';
// import { expect } from 'chai';
var apollo_boost_1 = require("apollo-boost");
var apollo_link_http_1 = require("apollo-link-http");
var node_fetch_1 = require("node-fetch");
var users = /** @class */ (function () {
    function users() {
    }
    users.allusers = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.client
                .query({
                query: _this.allusersQuery
            })
                .then(function (data) {
                console.log(data);
                resolve(data);
            })["catch"](function (error) {
                console.error(error);
                reject(error);
            });
        });
    };
    users.client = new apollo_boost_1.ApolloClient({
        link: apollo_link_http_1.createHttpLink({
            uri: 'https://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex/',
            fetch: node_fetch_1["default"]
        }),
        cache: new apollo_boost_1.InMemoryCache()
    });
    users.allusersQuery = apollo_boost_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["query {\n      allUsers {\n       id\n       email\n       name\n    }\n}\n   "], ["query {\n      allUsers {\n       id\n       email\n       name\n    }\n}\n   "])));
    return users;
}());
exports.users = users;
var templateObject_1;
