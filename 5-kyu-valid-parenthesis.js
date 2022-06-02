// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
// Examples

// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

// Constraints

// 0 <= input.length <= 100



function validParentheses(parens) {
    let counter = 0;
    const parensSplit = parens.split('');
    
    for(let i = 0; i < parens.length; i++){
      parensSplit[i] === '(' ? counter++ : counter--;
      console.log(counter);
      if(counter < 0) return false
    }
    if(counter === 0)  return true;
    else return false;
  
  }