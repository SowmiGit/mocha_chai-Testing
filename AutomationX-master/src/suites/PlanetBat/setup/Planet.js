"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var apollo_boost_1 = require("apollo-boost");
var apollo_server_1 = require("apollo-server");
var apollo_link_http_1 = require("apollo-link-http");
var PlanetData = /** @class */ (function () {
    function PlanetData() {
    }
    PlanetData.init = function () {
        this.client
            .query({
            query: this.planetData
        })
            .then(function (data) {
            console.log(data);
        })["catch"](function (error) {
            console.error(error);
        });
    };
    PlanetData.client = new apollo_boost_1.ApolloClient({
        link: apollo_link_http_1.createHttpLink({ uri: 'https://swapi.co/api/' }),
        cache: new apollo_boost_1.InMemoryCache()
    });
    PlanetData.planetData = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  {\n    get {\n      name: String,\n      rotation_period: Int,\n      orbital_period: Int,\n      diameter: Int,\n      climate: String,\n    }\n  }"], ["\n  {\n    get {\n      name: String,\n      rotation_period: Int,\n      orbital_period: Int,\n      diameter: Int,\n      climate: String,\n    }\n  }"])));
    return PlanetData;
}());
exports.PlanetData = PlanetData;
PlanetData.init();
var templateObject_1;
