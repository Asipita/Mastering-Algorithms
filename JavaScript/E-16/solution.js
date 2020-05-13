function solver(arr, mult){
    const newArr = [];
    let carry = 0;
    for(let i = arr.length-1; i >-1; i--){
      let value = (arr[i] * mult)%10 + carry;
      carry = Math.floor((arr[i]*mult)/10)
      newArr.unshift(value)
      if(i === 0 & carry > 0) newArr.unshift(carry)
    }
    return newArr;
  }
  
  function madSolution(num, pow){
    var temp = num.toString().split('').map(s=>Number(s))
  
    for(let i = 1; i < pow; i++){
      temp = solver(temp, num)
    }
    return temp.reduce((sum, value)=> sum + value, 0);
  }
  
  madSolution(2,1000)