// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    let newArr1 = arr.filter(element => element !== 0);
    let newArr2 = arr.filter(element => element === 0);
    console.log(newArr1)
      console.log(newArr2)
  
    return newArr1.concat(newArr2)
  }