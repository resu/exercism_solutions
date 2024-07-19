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
  const BASE_PRICES = {
    'Margherita': 7,
    'Caprese': 9,
    'Formaggio': 10,
  };

  const EXTRA_PRICES = {
    'ExtraSauce': 1,
    'ExtraToppings': 2,
  };

  if (!Object.prototype.hasOwnProperty.call(BASE_PRICES, pizza)) {
    throw new Error(`Unknown pizza type: ${pizza}`);
  }

  let price = BASE_PRICES[pizza];
  for (const extra of extras) {
    if (!Object.prototype.hasOwnProperty.call(EXTRA_PRICES, extra)) {
      throw new Error(`Unknown extra type: ${extra}`);
    }
    price += EXTRA_PRICES[extra];
  }

  return price;
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
  return pizzaOrders.reduce((total, order) => {
    return total + pizzaPrice(order.pizza, ...order.extras);
  }, 0);
}