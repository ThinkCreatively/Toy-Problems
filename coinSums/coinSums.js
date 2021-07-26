/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

var makeChange = function(total) {
  // Create a array that holds all £ and p values
  var coinValues = [1, 2, 5, 10, 20, 50, 100, 200];
  // Create a counter for each way the total can be created
  var amountOfWays = 0;
  // Create a function that takes in a amount
  var amountOfCoins = function(amount = 0, keys = coinValues) {
    // Base case: When amount is equal to total
    if (amount === total) {
      // Increment amount of ways
      amountOfWays++;
      return;
    }
    // Recursive case: When amount is less than total
    for(var i = keys.length - 1; i > 0; i--) {
      console.log(key[i]);
      console.log('COIN VALUE: ' + keys[i]);
      amount += keys[i];
      console.log('NEW AMOUNT: ' + amount);
      keys.unshift();
      amountOfCoins(amount, keys);
    }
  }
  amountOfCoins();
  //return amount of ways
  return amountOfWays
};

console.log('1: ' + (makeChange(1)));
console.log('2: ' + (makeChange(2)));

