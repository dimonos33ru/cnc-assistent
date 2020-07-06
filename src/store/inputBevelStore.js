import { decorate, observable, computed, action } from 'mobx';

export class BevelStore {
	// custom class field
	initialState = 0;

	// @observable
	inputsData = {
		outsideD: {
			value: this.initialState,
			label: 'd1',
			format: 'мм',
		},
		innersideD: {
			value: this.initialState,
			label: 'd2',
			format: 'мм',
		},
		angle: {
			value: this.initialState,
			label: 'α',
			format: '\u00b0',
		},
	};

	// @computed
	get calculateBevel() {
		const { outsideD, innersideD, angle } = this.inputsData;
		const abs = Math.abs(outsideD.value - innersideD.value) / 2;
		const deg = (angle.value * Math.PI) / 180; // радианы в градусы
		const interResult = abs * Math.tan(deg);
		const result = Math.round(interResult * 10) / 10; // округление до десятой
		return result;
	}

	// @action
	setInputsData(val, name) {
		return (this.inputsData[name].value = val);
	}

	clearInputsData() {
		for (const key in this.inputsData) {
			if (this.inputsData.hasOwnProperty(key)) {
				const input = this.inputsData[key];
				input.value = this.initialState;
			}
		}
	}
}

decorate(BevelStore, {
	inputsData: observable,
	calculateBevel: computed,
	addOutside: action,
	clearInputsData: action,
});
