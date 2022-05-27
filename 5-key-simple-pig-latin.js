// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !


function pigIt(str){
    // split string into separate words
    // shift and push first letter
    // push ay
    // ignore punctuation
    
    let wordList = str.split(' ');
    
    let fixedArr = wordList.map(element => {
      if(element.includes('!') ||element.includes('.')||element.includes('?')){
        return element
      }
      let tempword = element.split('');
      let temp = element[0];
      tempword.shift();
      tempword.push(temp);
      tempword.push('a');
      tempword.push('y');
      let finishedword = tempword.join('');
      element = finishedword;
      return element
    })
    console.log(fixedArr)
    return fixedArr.join(' ')
  }