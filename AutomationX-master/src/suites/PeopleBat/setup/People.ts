import gql from 'graphql-tag';
import ApolloClient from 'apollo-boost';
const { gql } = require('apollo-server');
  
const client = new ApolloClient(
   uri: 'https://swapi.co/api/';
);

export function People() {
const peopleData = gql`
  {
    get {
      name: String,
      hair_color: String,
      skin_color: String,
      gender: String,
      birth_year: String,
    }
  }`;
}
 
client
    .query ({
        query : peopleData
})
  .then(data => console.log(data))
  .catch(error => console.error(error));

 export default People;
 module.exports = peopleData;
