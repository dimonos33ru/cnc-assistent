import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

function Home() {
	return (
		<div>
			<Title level={4}>Home page</Title>
			<Title level={1}>В разработке...</Title>
		</div>
	);
}

export default Home;
