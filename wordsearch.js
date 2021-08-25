const wordSearch = (letters, word) => {
const horizontalJoin = letters.map(ls => ls.join(''))
const flipt = transpose(letters).map(ls => ls.join(''));
  for (l in horizontalJoin) {
    // console.log(flipt[l], word)
    // console.log(horizontalJoin[l], word);
    if (horizontalJoin[l] && horizontalJoin[l].includes(word)) {
      return true;
    }
    
    if (flipt[l] && flipt[l].includes(word)) {
      return true;
    }
  }
  return false;
}
    
  
const transpose = function(matrix) {
let newMatrix = []
  for (let i = 0; i < matrix[0].length; i++) {
    newMatrix[i] = []
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      newMatrix[j][i] = matrix[i][j];
    }
  }
  return newMatrix;
}
  
  
module.exports = wordSearch;    