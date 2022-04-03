// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.
function count (string) {  
    // The function code should be here
    let a = string.split('');
    let container = {};
    a.forEach(function(s){
      let count = 0;
      for(let i = 0; i < a.length; i++){
        if(s === a[i]){
          count++;
        }
      }
      container[s] = count;
    })
    
     return container;
  }
  