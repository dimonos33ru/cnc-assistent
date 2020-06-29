import React from 'react';
import { Menu } from 'antd';
import { HomeFilled, AppstoreFilled, ThunderboltFilled } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import { routesMap } from 'routes';

function SideMenu(props) {
	const location = useLocation();
	return (
		<Menu mode="inline" defaultSelectedKeys={[location.pathname]}>
			<Menu.Item key={routesMap.home} icon={<HomeFilled />} onClick={props.clickMenuItem}>
				<Link to={routesMap.home}>Home</Link>
			</Menu.Item>
			<Menu.Item key={routesMap.table} icon={<AppstoreFilled />} onClick={props.clickMenuItem}>
				<Link to={routesMap.table}>Table</Link>
			</Menu.Item>
			<Menu.Item key={routesMap.angle} icon={<ThunderboltFilled />} onClick={props.clickMenuItem}>
				<Link to={routesMap.angle}>Фаска</Link>
			</Menu.Item>
		</Menu>
	);
}

export default SideMenu;
