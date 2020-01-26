// import hello from './hello';
// import { expect } from 'chai';
import ApolloClient from 'apollo-boost';
import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { gql } from 'apollo-server';
import { createHttpLink } from 'apollo-link-http';

export class users {
   static client = new ApolloClient({
   link: createHttpLink ({ uri: 'https://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex' }),
   cache: new InMemoryCache() 
});

static allusers = gql`
  {
    get {
      userid: ID
      name: String,
    }
  }`;

    public static init() {
      this.client
         .query({
            query: this.allusers
         })
         .then((data: any) => {
            console.log(data)
         })
         .catch((error: any) => {
            console.error(error)
         });
   } 
}
users.init(); 




