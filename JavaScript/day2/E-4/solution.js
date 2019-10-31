const largestPalindrome = ()=>{
  // the largest palindrome is initialized to zero
  let largestPal = 0;
  for (let num1 = 100; num1 < 1000; num1++) {
    for (let num2 = 100; num2 < 1000; num2++){

      // there's no problem using const here because it is block scoped. it gets dumped after each condition block executes, i think...
      const product = num2*num1

      // the condition below compares the reverse of the number to the number itself by converting the number to a string
      if (product.toString().split("").reverse().join("") === product.toString()) {

        // i use the ternary operator below to choose the larger between the current palindrome product and the previous largest one
        largestPal = (largestPal > product)? largestPal : product
      }
    }

  }

  return largestPal
}

console.log(largestPalindrome())