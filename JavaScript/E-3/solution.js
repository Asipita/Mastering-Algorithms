// So this one was interesting, and i became obsessed with speed optimization, so i really optimized it, because it was so slow initially

// my beautifully optimized function for checking if a number is prime, returns true or false as the case may be
const is_prime = (entry) => {

	// 2 is a prime number, hard to include into logic, so i created it's return explicitly
	if (entry === 2)
		return true
	max_possible_factor = Math.ceil(entry / 2)

	for (let i = 2; i <= max_possible_factor;){
  	if(!(entry % i)){
  		max_possible_factor = entry / i
			return false
		}

		if(i === 2)
      i = 3
    else
      i+=2

	}

	return true
}

// filters factors and sends them up to is_prime for priming :)
const largestPrimeFactor = (query_num) =>{

	let max_prime_factor = 0

	let factorsArray = []

	max_possible_factor = Math.ceil(query_num / 2)

	for (let i = 2; i < max_possible_factor; i++) {

		// this conditional statement tests if "i", or its pair is a factor, then pushes it and/or its pair into factorsArray if prime
		if(query_num % i == 0){

			if(is_prime(i)){
				factorsArray.push(i)
			}
			if(is_prime(max_possible_factor)){
				factorsArray.push(max_possible_factor)
			}

			max_possible_factor = query_num/i
		}
	}

  return Math.max(...factorsArray)
}


console.log(largestPrimeFactor(600851475143000))
// console.log(is_prime(190))
