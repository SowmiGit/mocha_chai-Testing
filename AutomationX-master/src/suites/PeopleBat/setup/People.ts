import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { gql } from 'apollo-server';
import { createHttpLink } from 'apollo-link-http';

export class PeopleData {
   static client = new ApolloClient({
      link: createHttpLink({ uri: 'https://swapi.co/api/' }),
      cache: new InMemoryCache()
   });

   static peopleData = gql`
      {
         get {
            name: String,
            hair_color: String,
            skin_color: String,
            gender: String,
            birth_year: String,
         }
      }
   `;

   public static init() {
      this.client
         .query({
            query: this.peopleData
         })
         .then((data: any) => {
            console.log(data)
         })
         .catch((error: any) => {
            console.error(error)
         });
   }
}
PeopleData.init();
