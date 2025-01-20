/**
 * @param {number[]} ratings
 * @return {number}
 */

var candy = function (ratings) {
	let length = ratings.length;
	let array = Array(length).fill(1);

	for (let i = 1; i < length; i++) {
		if (ratings[i] > ratings[i - 1]) {
			array[i] = array[i - 1] + 1;
		}
	}

	for (let i = length - 2; i >= 0; i--) {
		if (ratings[i] > ratings[i + 1] && array[i] <= array[i + 1]) {
			array[i] = array[i + 1] + 1;
		}
	}

	return array.reduce((acc, num) => acc + num)
};
