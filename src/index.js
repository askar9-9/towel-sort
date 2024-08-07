
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }

  let outputArr = []
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i % 2 != 0) {
        outputArr.push(matrix[i][matrix[i].length - j - 1])
      } else {
        outputArr.push(matrix[i][j])
      }
    }
  }
  return outputArr
}
