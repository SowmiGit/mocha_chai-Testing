"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var apollo_boost_1 = require("apollo-boost");
var apollo_server_1 = require("apollo-server");
var apollo_link_http_1 = require("apollo-link-http");
var PeopleData = /** @class */ (function () {
    function PeopleData() {
    }
    PeopleData.init = function () {
        this.client
            .query({
            query: this.peopleData
        })
            .then(function (data) {
            console.log(data);
        })["catch"](function (error) {
            console.error(error);
        });
    };
    PeopleData.client = new apollo_boost_1.ApolloClient({
        link: apollo_link_http_1.createHttpLink({ uri: 'https://swapi.co/api/' }),
        cache: new apollo_boost_1.InMemoryCache()
    });
    PeopleData.peopleData = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      {\n         get {\n            name: String,\n            hair_color: String,\n            skin_color: String,\n            gender: String,\n            birth_year: String,\n         }\n      }\n   "], ["\n      {\n         get {\n            name: String,\n            hair_color: String,\n            skin_color: String,\n            gender: String,\n            birth_year: String,\n         }\n      }\n   "])));
    return PeopleData;
}());
exports.PeopleData = PeopleData;
PeopleData.init();
var templateObject_1;
