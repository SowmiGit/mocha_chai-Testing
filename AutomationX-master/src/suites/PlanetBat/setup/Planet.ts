import gql from 'graphql-tag';
import ApolloClient from 'apollo-boost';
const { gql } = require('apollo-server');

const client = new ApolloClient(
   uri: 'https://swapi.co/api/';
);

export function Planet() {
const planetData = gql`
  {
    get {
      name: String,
      rotation_period: Int,
      orbital_period: Int,
      diameter: Int,
      climate: String,
    }
  }`;
}
 
client
    .query ({
        query : planetData
})
  .then(data => console.log(data))
  .catch(error => console.error(error));

 export default Planet;
 module.exports = planetData;
