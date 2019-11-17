
function factors(number){
  // start from the highest number and continue increasing while passing the current index to the test function
  // to test if every positive integer is its factor

  for (let index = number; ; index+=number) {
    if(test(index, number))
      return index
  }
}

function test(num, number){
  for (let index = Math.floor(number/2); index <=number; index++) {
    if((num % index) !== 0){
      return false
    }
  }
  return true
}

console.log(factors(20))

// 232792560