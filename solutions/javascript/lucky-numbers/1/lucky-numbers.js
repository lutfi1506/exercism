// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let x = "";
  let y = "";
  array1.forEach((v) => {
    x += v.toString();
  });
  array2.forEach((v) => {
    y += v.toString();
  });
  return Number(x) + Number(y);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const stringValue = value.toString();
  const reverseValue = [...stringValue].reverse().join("");
  return value.toString() === reverseValue;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!input) return "Required field";
  const num = Number(input);
  if (Number.isNaN(num) || num === 0) {
    return "Must be a number besides 0";
  }
  return "";
}
