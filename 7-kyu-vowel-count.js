function getCount(str) {
    let vowelsCount = 0;
    let newStr;
    newStr = str.split("");
    newStr = newStr.filter(element => element == 'a' || element == 'e' || element == 'i' || element == 'o' || element == 'u' )
    newStr.forEach(element => console.log(element));
    return newStr.length;
  }