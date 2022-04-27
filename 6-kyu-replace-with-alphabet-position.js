function alphabetPosition(text) {
  let tempText = text.replace(/([\W _])/g, "").replace(/([0-9])/g,"").split('');
  for(let i = 0; i < tempText.length; i++){
    console.log(tempText[i]);
    if(tempText[i] === 'a' || tempText[i] === 'A' ){
      tempText[i] = 1;
    }else if(tempText[i] === 'b' || tempText[i] === 'B' ){
      tempText[i] = 2;
    }else if(tempText[i] === 'c' || tempText[i] === 'C' ){
      tempText[i] = 3;
    }else if(tempText[i] === 'd' || tempText[i] === 'D' ){
      tempText[i] = 4;
    }else if(tempText[i] === 'e' || tempText[i] === 'E' ){
      tempText[i] = 5;
    }else if(tempText[i] === 'f' || tempText[i] === 'F' ){
      tempText[i] = 6;
    }else if(tempText[i] === 'g' || tempText[i] === 'G' ){
      tempText[i] = 7;
    }else if(tempText[i] === 'h' || tempText[i] === 'H' ){
      tempText[i] = 8;
    }else if(tempText[i] === 'i' || tempText[i] === 'I' ){
      tempText[i] = 9;
    }else if(tempText[i] === 'j' || tempText[i] === 'J' ){
      tempText[i] = 10;
    }else if(tempText[i] === 'k' || tempText[i] === 'K' ){
      tempText[i] = 11;
    }else if(tempText[i] === 'l' || tempText[i] === 'L' ){
      tempText[i] = 12;
    }else if(tempText[i] === 'm' || tempText[i] === 'M' ){
      tempText[i] = 13;
    }else if(tempText[i] === 'n' || tempText[i] === 'N' ){
      tempText[i] = 14;
    }else if(tempText[i] === 'o' || tempText[i] === 'O' ){
      tempText[i] = 15;
    }else if(tempText[i] === 'p' || tempText[i] === 'P' ){
      tempText[i] = 16;
    }else if(tempText[i] === 'q' || tempText[i] === 'Q' ){
      tempText[i] = 17;
    }else if(tempText[i] === 'r' || tempText[i] === 'R' ){
      tempText[i] = 18;
    }else if(tempText[i] === 's' || tempText[i] === 'S' ){
      tempText[i] = 19;
    }else if(tempText[i] === 't' || tempText[i] === 'T' ){
      tempText[i] = 20;
    }else if(tempText[i] === 'u' || tempText[i] === 'U' ){
      tempText[i] = 21;
    }else if(tempText[i] === 'v' || tempText[i] === 'V' ){
      tempText[i] = 22;
    }else if(tempText[i] === 'w' || tempText[i] === 'W' ){
      tempText[i] = 23;
    }else if(tempText[i] === 'x' || tempText[i] === 'X' ){
      tempText[i] = 24;
    }else if(tempText[i] === 'y' || tempText[i] === 'Y' ){
      tempText[i] = 25;
    }else if(tempText[i] === 'z' || tempText[i] === 'Z' ){
      tempText[i] = 26;
    }
  
    console.log(tempText[i]);
  }
  
  return tempText.join(' ');
}
