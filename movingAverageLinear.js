// Moving average filter

// one-side (odd or even number of points)
// Not recursive!
/**
 * movingAverageAhead
 * @param {number[]} inputSamples the input samples array
 * @param {number} startIndex starting sample index
 * @param {number} M number of points (odd or even)
 * @returns {number} Result of moving average
 */
function movingAverageAhead(inputSamples, startIndex, M) {
	const endIndex = startIndex + M;
	let accumulator = 0;
	for (let i = startIndex; i < endIndex; i++) {
		inputSamples[i] ? (accumulator += inputSamples[i]) : (accumulator += 0);
	}
	return accumulator / M;
}

let sample = [];
for (let i = 0; i < 10; i++) {
	let v = Math.trunc(Math.random() * 10);
	sample.push(v);
}

const output = sample.map((v, i) => {
	return movingAverageAhead(sample, i, sample.length / 2);
});
console.log(sample, output);

// Assertions
console.assert(
	movingAverageAhead([0, 0, 0, 0, 0], 0, 5) === 0,
	"Average of 0s isn't 0"
);

console.assert(
	movingAverageAhead([1, 2, 3, 4, 5], 0, 5) === 3,
	"1,2,3,4,5 / 5 === 3"
);
