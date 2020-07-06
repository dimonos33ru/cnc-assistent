import React from 'react';
import './AngleCalcuation.css';
import styles from './AngleCalcuation.module.css';
import fragmentImg from './fragment.png';
import { Typography, Row, InputNumber, Col, Button, Divider } from 'antd';

import { useStores } from 'lib/hooks';
import { withStore } from 'lib/hoc';

const { Text, Title } = Typography;

const InputDataAngle = (props) => {
	return (
		<div className={styles.inputWrapp}>
			<Text strong>{props.label}:</Text>
			<InputNumber
				value={props.value}
				onChange={props.changeValue}
				onClick={(e) => e.target.select()}
				formatter={(value) => `${value}${props.format}`}
				parser={(value) => value.replace(`${props.format}`, '')}
				min={0}
				className={styles.input}
			/>
		</div>
	);
};

function AngleCalculation() {
	const { bevelStore } = useStores();
	const {
		inputsData: { outsideD, innersideD, angle },
	} = bevelStore;

	const inputsList = Object.keys(bevelStore.inputsData).map((item) => {
		const { value, format, label } = bevelStore.inputsData[item];
		return (
			<InputDataAngle
				key={label}
				label={label}
				format={format}
				value={value}
				changeValue={(e) => bevelStore.setInputsData(e, item)}
			/>
		);
	});

	return (
		<div className="wrapper-content">
			<Title level={3}>Введите параметры детали</Title>

			<Row align="middle" className={styles.baseContent}>
				<Col sm={{ span: 15, order: 1 }} xs={{ span: 24, order: 2 }}>
					<div className={styles.imageWrapper}>
						<img src={fragmentImg} alt="эскиз" />
						<Text mark className="dimension dimension-d1">
							&#8709; {outsideD.value}
						</Text>
						<Text mark className="dimension dimension-d2">
							&#8709; {innersideD.value}
						</Text>
						<Text mark className="dimension dimension-angle">
							{angle.value}&#176;
						</Text>
						<Col span={4} className="dimension dimension-bevel">
							<Text mark>L = {bevelStore.calculateBevel}</Text>
						</Col>
					</div>
				</Col>
				<Col sm={{ span: 9, order: 2 }} xs={{ span: 24, order: 1 }} style={{ marginBottom: '25px' }}>
					{inputsList}
				</Col>
			</Row>

			<Divider />

			<Row gutter={16} justify="end">
				<Col>
					<Button block onClick={() => bevelStore.clearInputsData()}>
						Очистить
					</Button>
				</Col>
				{/* <Col>
					<Button type="primary" block onClick={null}>
						Рассчитать фаску
					</Button>
				</Col> */}
			</Row>
		</div>
	);
}

export default withStore(AngleCalculation);
