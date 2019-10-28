// So this one was interesting, and i became obsessed with speed optimization, so i really optimized it, because it was so slow initially

// my beautifully optimized function for checking if a number is prime, returns true or false as the case may be
const is_prime = (entry) => {

	// 2 is a prime number, hard to include into logic, so i created it's return explicitly
	if (entry === 2)
		return true

	// this cuts the iteration by half, like the legendary divide and conquer i think, basically, when a prime factor is gotten, there can't be another factor after its pair, e.g, say, 100, its first factor is 2, its pair is 50 as 2 * 50 = 100, there can't be another factor after 50, so it's pointless to iterate above 50, hence the max_possible_factor variable
	max_possible_factor = Math.ceil(entry / 2)

	// looping from 2 to max_possible_factor factor, excluding 0 and 1 because those aren't prime numbers by consensus 
	// why did I use i+=2 as the increment? read further
	for (let i = 2; i <= max_possible_factor; i+=2){

		// this conditional statement returns false (and breaks out of the loop) if a factor is found before the number -> entry, itself, since a prime number, basically has only two factors, itself and 1
		if(!(entry % i)){

			// here's mister divide and conquer again :)
			max_possible_factor = entry / i

			return false
		}

		// this beautiful conditional statement further reduces the number of iterations by approximately half, the only even prime number is 2, hence, it's pointless iterating over other even numbers, so after encountering '2' i set the 'i' to 3 and then the using i+=2 as seen in the for loop statement ensures no other even number is encountered, :)
		if(i === 2)
			i = 3

	}
	
	// if you didn't encounter a return false up till this point, you must be a prime guy :) so i'll return true
	return true
}


 // soliloquy
 // in order to test for factors, when a factor is gotten, the quotient of the max num and the factor is automatically a factor


// here's the base function, this function filters factors and sends them up to is_prime for priming :)
const largestPrimeFactor = (query_num) =>{

	// the maximum prime factor initially set to zero
	let max_prime_factor = 0

	// an array to hold all prime factors returned by Mr. is_prime
	let factorsArray = []

	// I introduce to you again, Mr Divide and conquer
	max_possible_factor = Math.ceil(query_num / 2)
	
	// similar for loop statement as in is_prime, but using i++ instead of i+=2, because while the even factors (except 2) aren't needed, their pairs may be, so saved by the pairs they are (-_-) 
	for (let i = 2; i < max_possible_factor; i++) {
		
		// this conditional statement tests if "i", or its pair is a factor, then pushes it and/or its pair into factorsArray if prime
		if(query_num % i == 0){

			if(is_prime(i)){
				factorsArray.push(i)
			}
			if(is_prime(max_possible_factor)){
				factorsArray.push(max_possible_factor)
			}

			// you must recognize this guy at this point. Mr Divide and ...
			max_possible_factor = query_num/i
		}
	}


	// this spreads the factors array into the Math.max function which return the maximum number in its arguments list
	return Math.max(...factorsArray)
}


console.log(largestPrimeFactor(600851475143000))
