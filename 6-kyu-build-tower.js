// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]


function towerBuilder(nFloors) {
    // build here
    let towerArray = [];
    let floorTileAmount = nFloors * 2 - 1;
    let alteredTileAmount = floorTileAmount;
    const str = "*"
    for(let i = 0; i < nFloors; i++){
      let floor = str.repeat(alteredTileAmount);
      if(alteredTileAmount != floorTileAmount){
        let spaceAmt = (floorTileAmount - alteredTileAmount)/2;
        let space = " "
        floor = `${space.repeat(spaceAmt)}${floor}${space.repeat(spaceAmt)}`
      }
      towerArray.unshift(floor)
      alteredTileAmount -= 2;
    }
    return towerArray;
  }