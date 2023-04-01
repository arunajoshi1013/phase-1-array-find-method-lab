// code your solution here

function isAWin(element, index, array) {
   return (element.result === "W")
}

function superbowlWin(record) {
   const found = record.find(isAWin)
   if (found) {
      return found.year
   }
   return found
}
