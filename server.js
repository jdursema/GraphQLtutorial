var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);


//resolver function: allowy ou to extend 
var root = {
  hello: () => {
    return 'Hello world!';
  },
}




// var { graphql, buildSchema } = require('graphql');


//Creating schema
// var schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);

// The root provides a resolver function for each API endpoint
// var root = {
//   hello: () => {
//     return 'Hello world!';
//   },
// };

//Run the GraphQL query '{hello}' and pring out the response

// graphql(schema, '{ hello }', root).then((response)=> {
//   console.log(response.data.hello);
// });