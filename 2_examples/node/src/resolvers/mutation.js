const database = require("../storage/memory");

const MutationResolver = {
  order: (_, { dishes }) => {
    console.log("Order mutation received");
    const items = dishes.map(dishToOrder => {
      const dish = database.getDish(dishToOrder.dishId);

      if (!dish) throw new Error("Invalid dish: Doesn't exist");

      return dish;
    });

    const order = {
      orderId: `${Math.random()}`,
      delivery: new Date().toISOString(),
      items: items
    };

    database.addOrder(order);

    console.log("Order completed");

    return order;
  }
};

module.exports = MutationResolver;
