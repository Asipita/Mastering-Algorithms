const factorCounter =(num)=>{
  const factorsArray = []
  for (let i = 1; i < Math.sqrt(num)+1; i++) {
    if(num % i === 0){
      factorsArray.push(i)
    }
  }
  return (factorsArray[factorsArray.length-1]**2 === num)? (factorsArray.length*2)-1 : factorsArray.length * 2
}

const triangle_numbers = (number)=>{
  let num = 0;
  let temp = 0;

  while(factorCounter(num) < number){
    temp++
    num = num + temp
  }
  return num
}


console.log(triangle_numbers(500))
// console.log(factorCounter(100))
