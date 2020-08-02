import { decorate, observable, action, computed } from 'mobx';
import { bevelData } from 'data';

export class BevelStore {
	// @observable
	partParameters = bevelData();

	searchSide = 1;

	//@action
	calculateBevel() {
		const { outsideD, innersideD, angleB, legB } = this.partParameters;
		const abs = Math.abs(outsideD.value - innersideD.value) / 2;
		const deg = (angleB.value * Math.PI) / 180; // радианы в градусы
		const interResult = abs * Math.tan(deg);
		const result = Math.round(interResult * 10) / 10; // округление до десятой
		legB.value = result;
	}

	setSearchSide(value) {
		this.searchSide = value;
	}

	setInputsData(value, name) {
		const field = this.partParameters[name];
		field.value = value;
		field.valid = this.parametrValidate(value, field.validation);
		// field.valid = field.validator(field.value);
	}

	clearInputsData() {
		for (const key in this.partParameters) {
			const input = this.partParameters[key];
			input.value = 0;
		}
	}

	// @computed

	// user function
	/* Уравновешивание градусов */
	equilibrationAngle() {
		const { angleA, angleB } = this.partParameters;

		if (angleA.value !== 0 || angleB.value !== 0) {
			if (angleB.value !== 0) angleA.value = 90 - angleB.value;
			if (angleA.value !== 0) angleB.value = 90 - angleA.value;
		}
	}

	checkParametr(type, value) {
		if (type === 'diameter') {
		}
	}

	getMaxValueAngle(name) {
		const angleA = this.partParameters.angleA;
		const angleB = this.partParameters.angleB;
		if (name === 'angleA') {
			angleB.validation.maxValue = 90 - angleA.value;
		} else {
			angleA.validation.maxValue = 90 - angleB.value;
		}
	}

	parametrValidate(value, validation) {
		if (!validation) return true;

		let isValid = true;

		if (validation.minValue) {
			isValid = validation.minValue <= value && isValid;
		}

		if (validation.maxValue) {
			isValid = validation.maxValue >= value && isValid;
		}

		return isValid;
	}
}

decorate(BevelStore, {
	partParameters: observable,
	searchSide: observable,
	calculateBevel: action,
	setInputsData: action,
	clearInputsData: action,
	// getMaxValueAngle: computed,
});
