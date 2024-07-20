/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Determines the cooking status of the lasagna.
 * @param {number} [remainingTime] - The remaining time on the timer in minutes.
 * @returns {string} - The cooking status.
 */
export function cookingStatus(remainingTime) {
  if (remainingTime === undefined) {
    return 'You forgot to set the timer.';
  } else if (remainingTime === 0) {
    return 'Lasagna is done.';
  } else {
    return 'Not done, please wait.';
  }
}

/**
 * Estimates the preparation time for the lasagna.
 * @param {string[]} layers - The layers of the lasagna.
 * @param {number} [averageTimePerLayer=2] - The average preparation time per layer in minutes.
 * @returns {number} - The total preparation time.
 */
export function preparationTime(layers, averageTimePerLayer = 2) {
  return layers.length * averageTimePerLayer;
}

/**
 * Computes the amounts of noodles and sauce needed.
 * @param {string[]} layers - The layers of the lasagna.
 * @returns {{noodles: number, sauce: number}} - The quantities of noodles and sauce.
 */
export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;

  for (const layer of layers) {
    if (layer === 'noodles') {
      noodles += 50;
    } else if (layer === 'sauce') {
      sauce += 0.2;
    }
  }

  return { noodles, sauce };
}

/**
 * Adds the secret ingredient from the friend's list to the user's list.
 * @param {string[]} friendsList - The friend's list of ingredients.
 * @param {string[]} myList - The user's list of ingredients.
 */
export function addSecretIngredient(friendsList, myList) {
  const secretIngredient = friendsList[friendsList.length - 1];
  myList.push(secretIngredient);
}

/**
 * Scales the recipe for the desired number of portions.
 * @param {Object} recipe - The original recipe object.
 * @param {number} portions - The number of portions desired.
 * @returns {Object} - The scaled recipe object.
 */
export function scaleRecipe(recipe, portions) {
  const scaledRecipe = {};

  for (const ingredient in recipe) {
    scaledRecipe[ingredient] = (recipe[ingredient] / 2) * portions;
  }

  return scaledRecipe;
}