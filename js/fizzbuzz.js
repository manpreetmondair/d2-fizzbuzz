// Variable Declarations
var avow = require('avow');

// Functional Declarations
function FizzBuzz(n) {
     // I used for loop to make the flow woking untill i<=n and also I used condtions(if, else, ifelse) //to check the statement, if number(n) pass the condtion then it will return the output otherwise //it will go the next step and check the next condtion. This procee will repeat itself untill i<=n

    var output= '';
    for(var i=1; i<=n; i++){
      if (i %3 === 0 && i %5 === 0){
           output += 'FizzBuzz';
      }
      else if(i %3 === 0){
           output += 'Fizz';
      }
      else if(i %5 === 0){
           output += 'Buzz';
      }
      else {
           output += '.';
      } 
    } 
    return output;
}

FizzBuzz(15);

// Tests (do not modify these)
avow('FizzBuzz 1 should be .', '.' === FizzBuzz(1), '.', FizzBuzz(1));
avow('FizzBuzz 2 should be ..', '..' === FizzBuzz(2), '..', FizzBuzz(2));
avow('FizzBuzz 3 should be ..Fizz', '..Fizz' === FizzBuzz(3), '..Fizz', FizzBuzz(3));
avow('FizzBuzz 5 should be ..Fizz.Buzz', '..Fizz.Buzz' === FizzBuzz(5), '..Fizz.Buzz', FizzBuzz(5));
avow('FizzBuzz 10 should be ..Fizz.BuzzFizz..FizzBuzz', '..Fizz.BuzzFizz..FizzBuzz' === FizzBuzz(10), '..Fizz.BuzzFizz..FizzBuzz', FizzBuzz(10));
avow('FizzBuzz 15 should be ..Fizz.BuzzFizz..FizzBuzz.Fizz..FizzBuzz', '..Fizz.BuzzFizz..FizzBuzz.Fizz..FizzBuzz' === FizzBuzz(15), '..Fizz.BuzzFizz..FizzBuzz.Fizz..FizzBuzz', FizzBuzz(15));
