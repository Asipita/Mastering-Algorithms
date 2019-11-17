// declare a function to solve problem
// function takes in maximum limit parameter

const sum_of_multiples = (max_limit) =>{
	let totalSum = 0;
	// start from 3 since it's the lowest possible
	for (let i = 3; i < max_limit; i++) {
		// check for divisibility
		if(i % 3 === 0 || i % 5 === 0){
			totalSum+=i
		}	
	}
	return totalSum
}

console.log(sum_of_multiples(1000))