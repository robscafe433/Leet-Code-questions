function factorialize(num) {
  let result = num;
  while (num > 1) {
    num--;

    result *= num;
    console.log(result);
    console.log("///// Iteration: ", num);
  }
  // console.log(numArray);
  // numArray.reverse();
  // console.log(numArray);
  // console.log(typeof numArray);

  console.log("*** The result outside the while loop is: ", result);
}

console.log(factorialize(5));
