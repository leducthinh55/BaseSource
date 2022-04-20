import React, { useEffect } from 'react'
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    HomeOutlined,
    LeftSquareOutlined,
    RightSquareOutlined,
    FolderOpenOutlined,
    LineChartOutlined
} from '@ant-design/icons';
import { useState } from 'react';
import { useRouter } from 'next/router'
import ActiveLink from '../utils/activeLink';
const { Header, Sider, Content } = Layout;
type LayoutProps = {
    children: React.ReactNode,
};
const menuData = [
    {
        name: "Trang chủ",
        navigate: "/order",
        icon: <HomeOutlined />
    },
    {
        name: "Khách hàng",
        navigate: "/customer",
        icon: <UserOutlined />
    },
    {
        name: "Dịch vụ",
        navigate: "/service-type",
        icon: <FolderOpenOutlined />
    },
    {
        name: "Thống kê",
        navigate: "/statistic",
        icon: <LineChartOutlined />
    },
]
const AppLayout = ({ children }: LayoutProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const [defaultSelect, setDefaultSelect] = useState(['0']);
    const router = useRouter()
    function toggle() {
        setCollapsed(!collapsed);
    }
    const changeSelect = () => {        
        var pathname = window.location.pathname;
        setDefaultSelect([menuData.findIndex(_ => _.navigate === pathname).toString()]);
    }
    useEffect(changeSelect, []);
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
                {React.createElement(collapsed ? RightSquareOutlined : LeftSquareOutlined, {
                    className: 'trigger',
                    onClick: toggle,
                })}
                <div className="main-icon" />
                <Menu mode="inline" selectedKeys={defaultSelect}>
                    {
                        menuData.map((v, i) =>
                            <Menu.Item key={i} icon={v.icon} onClick={() => setDefaultSelect([i.toString()])}>
                                <ActiveLink href={v.navigate} />
                                {v.name}
                            </Menu.Item>
                        )
                    }
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        overflow: 'scroll'
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
}

export default AppLayout;