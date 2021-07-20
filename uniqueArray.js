const array = [1, 1, 2, 4, 2, 4];
let uniqueArray = array.filter((val, i) => {
  return ((array.indexOf(val) === i));
});

console.log(uniqueArray);