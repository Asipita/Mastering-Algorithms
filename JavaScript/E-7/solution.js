const is_prime = (entry) => {

  // 2 is a prime number, hard to include into logic, so i created it's return explicitly
  if(entry <= 1) return false
  if (entry === 2) return true

  max_possible_factor = Math.ceil(entry / 2)

  for (let i = 2; i <= max_possible_factor;) {

    if (!(entry % i)) {
      max_possible_factor = entry / i
      return false
    }

    if (i === 2) i = 3
    else i+=2
  }

  return true
}

function primest(){
  let j = 0
  let index = 2
  while (j < 10001){
    if (is_prime(index)) {
      answer = index
      j++
    }
    index += 1
  }

  return answer
}

console.log(primest())