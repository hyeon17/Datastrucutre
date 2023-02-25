function quick(arr) {
	if (arr.length < 2) {
		return arr;
	}
	const pivot = [arr[0]];
	const left = [];
	const right = [];

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else if (arr[i] > pivot) {
			right.push(arr[i]);
		} else {
			pivot.push(arr[i]);
		}
	}
	console.log(`left: ${left}, pivot: ${pivot}, right: ${right}`);
	return quick(left).concat(pivot, quick(right));
}

const arr = [10, 3, 2, 8, 1, 6, 4, 7, 5, 9];
const sorted = quick(arr);
console.log({
	arr,
	sorted
});
