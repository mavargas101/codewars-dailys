// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
function countBits(number){
    let num = number;
    let counter = num % 2 === 0 ? 0 : 1;
    while(num > 0)
      {
        num = Math.floor(num/2);
        console.log(num)
        if(num%2===0)
          continue
        else if(num%2 === 1)
          counter++
  
      }
    return counter
  }