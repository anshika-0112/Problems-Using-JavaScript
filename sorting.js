const arr = [9, 56, 1, 89, 5, 11];

//bubble sort
function bubbleSort(arr) {
  let i;
  const len = arr.length;

  let isSwapped = false;

  for (i = 0; i < len; i++) {
    isSwapped = false;

    arr.forEach((val, j) => {
      if (val > arr[j + 1]) {
        arr[j] = arr[j + 1];
        arr[j + 1] = val;
        isSwapped = true;
      }
    });

    if (!isSwapped) {
      break;
    }
  }
  console.log(arr);
}

bubbleSort(arr);

// arr.sort();
// console.log(arr);