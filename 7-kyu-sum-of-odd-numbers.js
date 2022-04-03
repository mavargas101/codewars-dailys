// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
    let rowMax = 1;
    let rowAmt = 0;
    let rowSum = 0; 
    
    for(let i = 1; i <= (n*n+(n-1)); i += 2){
      rowSum = rowSum + i;
      rowAmt++;
      
      if(i === (n*n + (n-1))){
        return rowSum;
      } 
      
      if(rowAmt === rowMax){     
        rowMax += 1;
        rowSum = 0;
        rowAmt = 0;
      }
    }
  }