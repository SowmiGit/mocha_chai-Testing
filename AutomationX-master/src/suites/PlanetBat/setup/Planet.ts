import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { gql } from 'apollo-server';
import { createHttpLink } from 'apollo-link-http';

export class PlanetData {
   static client = new ApolloClient({
      link: createHttpLink({ uri: 'https://swapi.co/api/' }),
      cache: new InMemoryCache()
   });

static planetData = gql`
  {
    get {
      name: String,
      rotation_period: Int,
      orbital_period: Int,
      diameter: Int,
      climate: String,
    }
  }`;

    public static init() {
      this.client
         .query({
            query: this.planetData
         })
         .then((data: any) => {
            console.log(data)
         })
         .catch((error: any) => {
            console.error(error)
         });
   } 
}
PlanetData.init(); 
