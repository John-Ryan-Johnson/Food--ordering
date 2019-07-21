const restaurant = {
  name: "Bob's Burgers",
  orders: [],
  placeOrder: function (meal) {
    this.orders.push(meal)
  },
  getAllOrders: function () {
    return this.orders
  }
}

const chickenNuggetMeal = {
  sandwichType: "none",
  fries: true,
  drinkSize: "L"
}

const cheeseburger = {
  sandwichType: "burger",
  fries: false,
  drinkSize: "L"
}

// Place an order
let newOrder1 = restaurant.placeOrder(chickenNuggetMeal)
let newOrder2 = restaurant.placeOrder(cheeseburger)

// Invoke the function to return the list of all orders
let allOrders = restaurant.getAllOrders()

// Output all orders to the console using console.table()
console.table(allOrders)