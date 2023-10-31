function printPyramid(n) {
    for (let row = 1; row <= n; row++) {
      let spaces = ' '.repeat(n - row); // Calculate spaces
      let stars = '*'.repeat(2 * row - 1); // Calculate stars
      let pyramidRow = spaces + stars; // Combine spaces and stars
      console.log(pyramidRow);
    }
  }
  
  let n = 5;
  printPyramid(n);

  