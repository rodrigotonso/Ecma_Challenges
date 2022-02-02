/** TASK:
 * You must to recive a number with
 * how many numbers of the fibonacci series you want
 * and return an array with all that numbers.
 * You'll recive always positive numbers and less to 9007199254740991.
 *  */

const fibonacciSecuencie = (serieLength = 0) => {
  if (serieLength === 0) return [];
  if (serieLength === 1) return [0];

  let result = [0, 1];
  for (let i = 2; i < serieLength; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result;
};

export default fibonacciSecuencie;
