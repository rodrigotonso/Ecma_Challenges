/** TASK:
 * You must to recive a number with
 * the value of the fibonacci series you want
 * and return that value.
 * Prevent all type of errors how you can
 * Return a string when there is an error.
 *  */

const fibonacciValuesPreventErrors = (fiboPosition = 0) => {
  if (!isValidArgument(fiboPosition)) return "You send an incorrect argument.";

  let result = [0, 1];
  for (let i = 2; i <= fiboPosition; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result[fiboPosition];
};

function isValidArgument(arg) {
  if (!(arg > 0) || arg === Infinity) return false;
  if (arg > Number.MAX_SAFE_INTEGER) return false;
  return true;
}

export default fibonacciValuesPreventErrors;
