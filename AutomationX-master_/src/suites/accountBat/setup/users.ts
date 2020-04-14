
import { ApolloClient, InMemoryCache, gql } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { parse } from 'graphql'
import fetch from 'node-fetch'

export class users {
   static client = new ApolloClient({
      link: createHttpLink({
         uri: 'https://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex/',
         fetch: fetch
      }),
      cache: new InMemoryCache()
   });

   static allusersQuery = gql `
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
   public static allusers(): Promise<any> {
      return new Promise((resolve, reject) => {
         this.client
            .query({
               query: this.allusersQuery
            })
            .then((data: any) => {
               //console.log(data)
               resolve(data)
            })
            .catch((error: any) => {
              // console.error(error)
               reject(error);
            });
      });
   }
}



