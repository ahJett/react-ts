/*
 * @Description: 
 * @Author: 滇西
 * @Date: 2022-11-01 22:43:13
 * @LastEditors: 滇西
 * @LastEditTime: 2022-11-10 20:33:13
 */


import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import ahjet from '@/assets/images/ahjet.jpg'
// import {navigate} from '@/utils/router'
import {useNavigate,Outlet} from 'react-router-dom'
import MainMenu from '@/components/mainMenu/Index'
const { Header, Content, Footer, Sider } = Layout;




const View: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  


  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 左边侧边栏 */}
      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <div className="logo">
          <img src={ahjet} alt="" />
        </div>
        <MainMenu></MainMenu>
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