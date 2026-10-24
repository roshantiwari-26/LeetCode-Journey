/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  let n = deck.length;

  deck.sort((a, b) => a - b);

  let indexQueue = [];
  for (let i = 0; i < n; i++) {
    indexQueue.push(i);
  }

  let result = new Array(n).fill(0);

  for (let card of deck) {
    let targetIndex = indexQueue.shift();
    result[targetIndex] = card;

    if (indexQueue.length > 0) {
      let nextIndexToSkip = indexQueue.shift();
      indexQueue.push(nextIndexToSkip);
    }
  }

  return result;
};

console.log(deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7])); //2 3 5 7 11 13 17
