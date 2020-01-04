function triplet(params) {
  for (let a = 0; a < 1000; a++) {
    for (let b = 0; b < 1000; b++) {
      const diff = 1000 - b - a
      const element = a + b + diff;
      if (element === params && diff > b && b > a)
        if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(diff, 2))
          return(a*b*diff)

    }
  }
}

// function pythagorean(params) {
//   for (let a = 0; a < 1000; a++) {
//     for (let b = 0; b < 1000; b++) {
//       for (let c = 1000; c > 0; c--) {
//         const element = a + b + c;
//         if (element === params) {
//           if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2))
//             console.log(a, b, c)
//         }
//       }
//     }
//   }
// }


console.log(triplet(1000))