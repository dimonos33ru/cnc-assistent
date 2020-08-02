import React from 'react';
import './AngleCalcuation.css';
import styles from './AngleCalcuation.module.css';
import fragmentImg from './fragment1.png';
import { Typography, Row, InputNumber, Col, Button, Radio, Divider } from 'antd';

import { useStores } from 'lib/hooks';
import { withStore } from 'lib/hoc';

function AngleCalculation() {
	const { bevelStore } = useStores();

	function inputOnChange(e, name) {
		bevelStore.setInputsData(e, name);
	}

	function buttonClickCalculate() {
		bevelStore.equilibrationAngle();
		bevelStore.calculateBevel();
	}

	const dimensions = Object.keys(bevelStore.partParameters).map((item) => {
		const { name, value, type, validation } = bevelStore.partParameters[item];

		let cls = bevelStore.searchSide === 1 && type === 'leg' ? 'unknown-side' : '';
		const maxVal = validation ? validation.maxValue : 100;

		return (
			<div key={name} className={`dimension-${name}`}>
				{type === 'diameter' ? <span className={`label-${type}`}>&#8960;</span> : null}
				<InputNumber
					className={cls}
					size="small"
					value={value}
					min={0}
					max={maxVal}
					type="number"
					// disabled={disable}
					// onChange={(e) => bevelStore.setInputsData(e, item)}
					onChange={(e) => inputOnChange(e, item)}
				/>
				{type === 'angle' ? <span className={`label-${type}`}>&#176;</span> : null}
			</div>
		);
	});

	return (
		<div className="wrapper-content">
			<Typography.Title level={3}>Введите параметры детали</Typography.Title>

			<Radio.Group onChange={(e) => bevelStore.setSearchSide(e.target.value)} value={bevelStore.searchSide}>
				<Radio value={1}>A</Radio>
				<Radio value={2}>B</Radio>
			</Radio.Group>

			<Row justify="center" align="middle" className={styles.baseContent}>
				<Col>
					<div className={styles.imageWrapper}>
						<img src={fragmentImg} alt="эскиз" />
						<div>{dimensions}</div>
					</div>
				</Col>
			</Row>

			<Divider />

			<Row gutter={16} justify="end">
				<Col>
					<Button onClick={() => bevelStore.clearInputsData()}>Очистить</Button>
				</Col>
				<Col>
					<Button type="primary" onClick={buttonClickCalculate}>
						Рассчитать фаску
					</Button>
				</Col>
			</Row>
		</div>
	);
}

export default withStore(AngleCalculation);
