/**
 * Must to return the mode in an array
 */
const findMode = (numbersArray = []) => {
  const frequency = [];
  numbersArray.forEach((number) => {
    frequency[number]++;
  });
  return Math.max(...frequency);
};
findMode();

export default findMode;
