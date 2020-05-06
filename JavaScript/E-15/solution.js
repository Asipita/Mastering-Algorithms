const generateSquareArray = (rows, columns) => {
    rows+=1;columns+=1;
    const arr = new Array(rows)
    for (let index = 0; index < rows; index++) {
        arr[index] = new Array(columns)        
    }
    return countLatticePaths(arr)
}

const countLatticePaths = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if(i === 0 || j === 0){
               array[i][j] = 1;
            }
            else{
                array[i][j] = array[i -1][j] + array[i][j-1]
                solution = array[i][j]
            }
        }
    }
    return(solution)
}

console.log(generateSquareArray(20, 20))
