function collatzCounter(number, count){
  count++
  // console.log(count)
  while(number > 1){
    if(number%2 == 0){
      number/=2
      return collatzCounter(number, count)
    }else {
      number = (3*number)+1
      return collatzCounter(number, count)
    }
  }
  return count
}

function collatz(number){

  let highestCollatz = {
    count : 0, value : 0
  };

  for (let index = 2; index < number; index++) {

    let currentCollatz = collatzCounter(index, 0)

    if(currentCollatz > highestCollatz.value){
      highestCollatz.value = currentCollatz
      highestCollatz.count = index
    }
  }
  return highestCollatz.count
  // return console.log(collatzCounter(15))
}

console.log(collatz(1000000))
// console.log(collatzCounter(1000000, 0))