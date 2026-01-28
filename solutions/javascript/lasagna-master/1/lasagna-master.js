/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timer) {
  if (timer === 0) return "Lasagna is done.";
  if (timer > 0) return "Not done, please wait.";
  return "You forgot to set the timer.";
}

export function preparationTime(layer, timer = 2) {
  return layer.length * timer;
}

export function quantities(layer) {
  let sauce = 0;
  let noodles = 0;
  layer.forEach((v) => {
    if (v === "sauce") sauce += 0.2;
    if (v === "noodles") noodles += 50;
  });
  return { sauce, noodles };
}

export function addSecretIngredient(friendsList, myList) {
  const lastFriendsList = [...friendsList].reverse()[0];
  myList.push(lastFriendsList);
}

export const scaleRecipe = (recipe, size) => {
  const newRecipe = { ...recipe };
  for (let x in newRecipe) {
    newRecipe[x] *= size / 2;
  }
  return newRecipe;
};
