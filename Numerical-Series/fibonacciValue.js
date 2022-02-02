/** TASK:
 * You must to recive a number with
 * the value of the fibonacci series you want
 * and return that value.
 * You'll recive always positive numbers and less to 9007199254740991.
 *  */

const fibonacciValue = (fiboPosition = 0) => {
  let result = [0, 1];
  for (let i = 2; i <= fiboPosition; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result[fiboPosition];
};

export default fibonacciValue;
