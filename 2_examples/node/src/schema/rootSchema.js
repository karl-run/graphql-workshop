const { gql } = require("apollo-server");

const schema = gql`
  type Ingredient {
    id: Int!
    name: String!

    # Resolved from external REST API
    marketPrice: Float
    # Resolved from external GraphQL API
    allergens: [String!]!
  }

  type Dish {
    id: Int!
    name: String!
    price: Int!

    # Resolved from local database
    ingredients: [Ingredient!]
  }

  enum OrderByEnum {
    NAME
  }

  type Query {
    # Gets all dishes available
    dishes: [Dish!]!
    # Gets spesicif dish by dishId
    dish(dishId: Int!): Dish
    # Gets all current orders
    orders: [Receipt!]!
    # Gets all ingredients
    ingredients(orderBy: OrderByEnum): [Ingredient!]!
  }

  # Represent a order in the system
  type Receipt {
    orderId: String
    delivery: String
    items: [Dish!]!
  }

  input Order {
    dishId: Int!
    quantity: Int!
  }

  type Mutation {
    # Place an order, one or many orders are accepted
    order(dishes: [Order!]!): Receipt!
  }
`;

module.exports = schema;
