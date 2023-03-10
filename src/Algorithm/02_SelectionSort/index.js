function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let min = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) min = j;
		}
		[arr[i], arr[min]] = [arr[min], arr[i]];
	}
	return arr;
}

const arr = [10, 3, 2, 8, 1, 6, 4, 7, 5, 9];

selectionSort(arr);
// console.log(arr);
