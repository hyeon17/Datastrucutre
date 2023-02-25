const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > cur) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = cur;
  }
  return arr;
};

insertionSort([10, 3, 2, 8, 1, 6, 4, 7, 5, 9]);
