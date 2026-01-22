/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  let counter = 0;
  switch (pizza) {
    case "Margherita":
      counter += 7;
      break;
    case "Caprese":
      counter += 9;
      break;
    case "Formaggio":
      counter += 10;
      break;
  }

  extras.forEach((extra) => {
    switch (extra) {
      case "ExtraSauce":
        counter += 1;
        break;
      case "ExtraToppings":
        counter += 2;
        break;
    }
  });

  return counter;
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  return pizzaOrders.reduce(
    (sum, order) => sum + pizzaPrice(order.pizza, ...order.extras),
    0,
  );
}
