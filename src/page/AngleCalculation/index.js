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

	const dimensions = Object.keys(bevelStore.partParameters).map((item) => {
		const { name, value, type, validation } = bevelStore.partParameters[item];

		let disable = false;
		// if (bevelStore.searchSide === 1) {
		// 	disable = name === 'legB' || name === 'angleA';
		// } else if (bevelStore.searchSide === 2) {
		// 	disable = type === 'diameter' || name === 'angleB';
		// }

		return (
			<div key={name} className={`dimension-${name}`}>
				{type === 'diameter' ? <span className={`label-${type}`}>&#8960;</span> : null}
				<InputNumber
					size="small"
					value={value}
					min={0}
					max={validation.maxValue}
					type="number"
					disabled={disable}
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
					<Button type="primary" onClick={() => bevelStore.calculateBevel()}>
						Рассчитать фаску
					</Button>
				</Col>
			</Row>
		</div>
	);
}

export default withStore(AngleCalculation);
