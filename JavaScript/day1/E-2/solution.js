const sum_of_even_fibonacci = (max_limit) =>{
	const fibonacci_array = [1, 2]
	let nth_term = 0
	let even_total = 2

	while(true){
		nth_term = fibonacci_array[fibonacci_array.length -1] + fibonacci_array[fibonacci_array.length -2]
		if(nth_term < max_limit){
			if(nth_term % 2 === 0){
				even_total += nth_term
			}
			fibonacci_array.push(nth_term)	
		}
		else
			break
	}

	return {fibonacci_array, even_total}
}

console.log(sum_of_even_fibonacci(400))