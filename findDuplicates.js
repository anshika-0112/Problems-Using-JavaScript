const array = [1, 1, 2, 4, 2, 4, 3, 6];
let duplicateArray = array.filter((val, i) => {
  return array.indexOf(val) !== i;
});

console.log(duplicateArray);
