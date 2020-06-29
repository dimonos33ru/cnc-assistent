import React, { useState } from 'react';
import './AngleCalcuation.css';
import styles from './AngleCalcuation.module.css';
import fragmentImg from './fragment.png';
import { Typography, Row, InputNumber, Col, Button, Divider } from 'antd';

const { Text, Title } = Typography;

const InputDataAngle = (props) => {
	return (
		<div className={styles.inputWrapp}>
			<Text strong>{props.label}:</Text>
			<InputNumber value={props.value} onChange={props.changeValue} min={0} type="number" className={styles.input} />
		</div>
	);
};

function AngleCalculation() {
	const initialState = 0;
	const [diametrOne, setDiametrOne] = useState(initialState);
	const [diametrTwo, setDiametrTwo] = useState(initialState);
	const [angle, setAngle] = useState(initialState);

	const [isVisible, setIsVisible] = useState(false);

	const [bevel, setBevel] = useState(initialState);

	/* Рассчет фаски */
	function calculateBevel(d1, d2, a) {
		const abs = Math.abs(d1 - d2) / 2;
		const deg = (a * Math.PI) / 180; // радианы в градусы
		const interResult = abs * Math.tan(deg);
		const result = Math.round(interResult * 10) / 10; // округление до десятой
		return result;
	}

	const handleButtonBevel = () => {
		setBevel(calculateBevel(diametrOne, diametrTwo, angle));
		setIsVisible(true);
	};

	const handleButtonClear = () => {
		[setDiametrOne, setDiametrTwo, setAngle].forEach((setFunc) => {
			setFunc(initialState);
		});
		setIsVisible(false);
	};

	return (
		<div className="wrapper-content">
			<Title level={3}>Введите параметры детали</Title>

			<Row align="middle" className={styles.base}>
				<Col sm={{ span: 15, order: 1 }} xs={{ span: 24, order: 2 }}>
					<div className={styles.imageWrapper}>
						<img src={fragmentImg} alt="эскиз" />
						<Text mark className="dimension dimension-d1">
							&#8709; {diametrOne}
						</Text>
						<Text mark className="dimension dimension-d2">
							&#8709; {diametrTwo}
						</Text>
						<Text mark className="dimension dimension-angle">
							{angle}&#176;
						</Text>
						<Col span={isVisible ? 4 : 0} className="dimension dimension-bevel">
							<Text mark>L = {bevel}</Text>
						</Col>
					</div>
				</Col>
				<Col sm={{ span: 9, order: 2 }} xs={{ span: 24, order: 1 }} style={{ marginBottom: '25px' }}>
					<InputDataAngle label="d1" format="мм" value={diametrOne} changeValue={(e) => setDiametrOne(e)} />
					<InputDataAngle label="d2" format="мм" value={diametrTwo} changeValue={(e) => setDiametrTwo(e)} />
					<InputDataAngle label="α" format="°" value={angle} changeValue={(e) => setAngle(e)} />
				</Col>
			</Row>

			<Divider />

			<Row gutter={16} justify="end">
				<Col>
					<Button block onClick={handleButtonClear}>
						Очистить
					</Button>
				</Col>
				<Col>
					<Button type="primary" block onClick={handleButtonBevel}>
						Рассчитать фаску
					</Button>
				</Col>
			</Row>
		</div>
	);
}

export default AngleCalculation;
