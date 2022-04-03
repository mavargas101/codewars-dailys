// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"


function toCamelCase(str){
    if(str){
      let words;
      if(str.includes('-')){
        words = str.split("-");
      }else if(str.includes('_')){
        words = str.split("_");
      }
  
      for(let i = 1; i < words.length; i++){
        let tempWord = words[i];
        tempWord = tempWord.substr(0,1).toUpperCase() + tempWord.substr(1,tempWord.length);
        words[i] = tempWord
      }
      return words.join('');
    }else{
      return ""
    }
    
  }