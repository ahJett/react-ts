/*
 * @Description: 
 * @Author: 滇西
 * @Date: 2022-11-01 22:43:13
 * @LastEditors: 滇西
 * @LastEditTime: 2022-11-09 22:49:07
 */
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import ahjet from '@/assets/images/ahjet.jpg'
// import {navigate} from '@/utils/router'
import {useNavigate,Outlet} from 'react-router-dom'
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('概览', '/overView', <PieChartOutlined />),
  getItem(' 内容', '/content', <DesktopOutlined />),
  getItem('设置', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const View: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const navigateTo = useNavigate()
  // 侧边栏点击切换路由
  const menuClick = (e:{key:String})=>{
    navigateTo(e.key)
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 左边侧边栏 */}
      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <div className="logo">
          <img src={ahjet} alt="" />
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={menuClick} />
      </Sider>
      {/* 右边内容 */}
      <Layout className="site-layout">
        {/* 右侧头部 */}
        <Header className="site-layout-background" style={{ padding: 0 }} >
        <Breadcrumb style={{ lineHeight:'64px',padding:'0 16px'  }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        {/* 右边内容 */}
        <Content style={{ margin: '16px 16px 0'}} className="site-layout-background">
          {/* 路由内容部分 */}
          <Outlet></Outlet>
        </Content>
        {/* 右边底部 */}
        <Footer style={{ textAlign: 'center',padding: '13px 0'}}>Design ©2022 Created by ahJet</Footer>
      </Layout>
    </Layout>
  );
};

export default View;