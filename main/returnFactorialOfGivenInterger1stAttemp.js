function factorialize(num) {
    let arrayNums = [];
    let sum = 0;
    let finalSum = 0;
    while (num > 0) {
      arrayNums.push(num);
      num--;
      console.log(arrayNums);
    }
    console.log("This is final array?", arrayNums);
    console.log(typeof arrayNums[2]);
  
    for (let i = 0; i < arrayNums.length; i++) {
      sum = arrayNums[i] * arrayNums[i + 1];
      finalSum += sum;
      console.log("/////////////////////");
      console.log(
        arrayNums[i],
        " * ",
        arrayNums[i + 1],
        " = ",
        sum,
        " Running Amount: ",
        finalSum
      );
    }
    return num;
  }
  
  console.log(factorialize(5));
  