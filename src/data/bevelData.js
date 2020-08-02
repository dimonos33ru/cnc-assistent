function bevelData() {
	return {
		outsideD: createBevelData(
			{
				name: 'outside',
				type: 'diameter',
			},
			{ minValue: 1, maxValue: 1000, required: true }
		),
		innersideD: createBevelData(
			{
				name: 'innerside',
				type: 'diameter',
			},
			{ minValue: 0, maxValue: 1000, required: true }
		),
		angleA: createBevelData(
			{
				name: 'angleA',
				type: 'angle',
			},
			{ minValue: 0, maxValue: 90, required: true }
		),
		angleB: createBevelData(
			{
				name: 'angleB',
				type: 'angle',
			},
			{ minValue: 0, maxValue: 90, required: true }
		),
		legB: createBevelData(
			{
				name: 'legB',
				type: 'leg',
			}
			// { minValue: 0, maxValue: 1000, required: false }
		),
	};
}

export default bevelData;

function createBevelData(config, validation) {
	return {
		...config,
		validation,
		valid: !validation,
		value: 0,
	};
}

// validator: (val) => /(^[0-8][0-9]$)|(\b\d\b)/.test(val),
// validator: (val) => /^[0-9][0-9]?$|^100$/.test(val),

// function bevelData() {
// 	return {
// 		outsideD: {
// 			name: 'outside',
// 			value: 0,
// 			maxValue: 1000,
// 			type: 'diameter',
// 		},
// 		innersideD: {
// 			name: 'innerside',
// 			value: 0,
// 			maxValue: 1000,
// 			type: 'diameter',
// 		},
// 		angleA: {
// 			name: 'angleA',
// 			value: 0,
// 			maxValue: 90,
// 			type: 'angle',
// 		},
// 		angleB: {
// 			name: 'angleB',
// 			value: 0,
// 			maxValue: 90,
// 			type: 'angle',
// 		},
// 		legB: {
// 			name: 'legB',
// 			value: 0,
// 			maxValue: 1000,
// 			type: 'leg',
// 		},
// 	};
// }
