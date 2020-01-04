function sumSquareDiff(n){
  let squareSum = 0
  let sum = 0
  for (let i =1; i <= n; i++) {
    squareSum += Math.pow(i, 2)
    sum += i
  }

  return Math.pow(sum, 2) - squareSum
}

console.log(sumSquareDiff(10))