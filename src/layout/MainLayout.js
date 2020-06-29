import React, { useState } from 'react';
import './MainLayout.css';
import { Layout, Typography, Drawer } from 'antd';
import { MenuOutlined, SlackOutlined } from '@ant-design/icons';
import SideMenu from './SideMenu/SideMenu';

const { Sider, Header, Content, Footer } = Layout;
const Logo = () => {
	return (
		<>
			<SlackOutlined className="logo" />
			{/* <Typography.Text>CncAssistent</Typography.Text> */}
		</>
	);
};

function MainLayout(props) {
	const [isCollapse, setIsCollapse] = useState(false);
	const [showDrawer, setShowDrawer] = useState(false);

	const toggleMenuDrawer = () => {
		setShowDrawer((prevState) => !prevState);
	};

	const clickMenuItem = () => {
		if (showDrawer) {
			toggleMenuDrawer();
		}
	};

	return (
		<div className="wrapper-base">
			<Layout>
				<Header className="header">
					{isCollapse ? <MenuOutlined className="trigger" onClick={toggleMenuDrawer} /> : <Logo />}
					<Typography.Title level={3} className="header-name">
						Cnc Assistent
					</Typography.Title>
				</Header>
				<Layout>
					<Sider
						className="site-layout-background"
						breakpoint="md"
						collapsedWidth="0"
						trigger={null}
						onCollapse={(collapsed) => {
							setIsCollapse(collapsed);
						}}
					>
						<SideMenu />
					</Sider>
					<Layout>
						<Content style={{ margin: '24px	16px 0' }}>
							<div className="main-content site-layout-background">{props.children}</div>
						</Content>
						<Footer style={{ textAlign: 'center', padding: '15px 0' }}>
							Apogei Corp ©2020 Created by Karpov Dmitryi
						</Footer>
					</Layout>
				</Layout>

				<Drawer
					title={<Logo />}
					placement="left"
					closable={false}
					onClose={toggleMenuDrawer}
					visible={showDrawer}
					getContainer={false}
					style={{ position: 'absolute' }}
					bodyStyle={{ padding: 0 }}
					headerStyle={{ padding: '19px 24px' }}
				>
					<SideMenu clickMenuItem={clickMenuItem} />
				</Drawer>
			</Layout>
		</div>
	);
}

export default MainLayout;
