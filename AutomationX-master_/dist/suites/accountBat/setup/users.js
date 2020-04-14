"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_boost_1 = require("apollo-boost");
const apollo_link_http_1 = require("apollo-link-http");
const node_fetch_1 = require("node-fetch");
class users {
    static allusers() {
        return new Promise((resolve, reject) => {
            this.client
                .query({
                query: this.allusersQuery
            })
                .then((data) => {
                //console.log(data)
                resolve(data);
            })
                .catch((error) => {
                // console.error(error)
                reject(error);
            });
        });
    }
}
exports.users = users;
users.client = new apollo_boost_1.ApolloClient({
    link: apollo_link_http_1.createHttpLink({
        uri: 'https://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex/',
        fetch: node_fetch_1.default
    }),
    cache: new apollo_boost_1.InMemoryCache()
});
users.allusersQuery = apollo_boost_1.gql `
   query {
      users: allUsers {
       id   
       email
       name 
       createdAt
       updatedAt  
   } 
}
   `;
