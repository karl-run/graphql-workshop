# node example

This example uses:

- apollo-server for schema first development
- graphql for graphql runtime
- nodemon for hot-reloading

Entire starter is defined in index.js.

## Points of interest

- [clients/allergens.js](/2_examples/node/src/clients/allergens.js)
  - Client for communicating with allergens REST API. Perfect for stealing if you don't want to implement this your self!
- [clients/marketPrice.js](/2_examples/node/src/clients/marketPrice.js)
  - Client for communicating with marketPrice GraphQL API. Perfect for stealing if you don't want to implement this your self!
- [schema.js](/2_examples/node/src/schema/rootSchema.js)
  - GraphQL schema
- [resolvers/base.js](/2_examples/node/src/resolvers/base.js)
  - GraphQL base resolver, all other resolvers are sown together here. Follow the imports for query/mutation/object resolvers.
