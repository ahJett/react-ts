/*
 * @Description: 
 * @Author: 滇西
 * @Date: 2022-11-10 20:22:49
 * @LastEditors: 滇西
 * @LastEditTime: 2022-11-10 21:20:42
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
import { useNavigate,useLocation } from 'react-router-dom'
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


// const items: MenuItem[] = [
//   getItem('概览', '/overView', <PieChartOutlined />),
//   getItem(' 内容', '/content', <DesktopOutlined />),
//   getItem('设置', 'sub1', <UserOutlined />, [
//     getItem('Tom', '3'),
//     getItem('Bill', '4'),
//     getItem('Alex', '5'),
//   ]),
//   getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//   getItem('Files', '9', <FileOutlined />),
// ];

const items: MenuItem[] = [
  {
    label: '概览',
    key: '/overView',
    icon: <PieChartOutlined />,
  },
  {
    label: '内容',
    key: '/content',
    icon: <DesktopOutlined />,
  },
  {
    label: '设置',
    key: '/setting',
    icon: <UserOutlined />,
    children: [
      {
        label: '权限',
        key: '/setting/role',
      },
      {
        label: '用户',
        key: '/setting/user',
      }
    ]
  },
  {
    label: '图表',
    key: '/chart',
    icon: <UserOutlined />,
    children: [
      {
        label: '看板',
        key: '/chart/brand',
      }
    ]
  },
]

const Comp: React.FC = () => {
  const navigateTo = useNavigate()
  const currentRoute = useLocation()
  // 侧边栏点击切换路由
  const menuClick = (e: { key: String }) => {
    navigateTo(e.key)
  }
  const [openKeys, setopenKeys] = useState([''])
  const handleChange = (keys: string[]) => {
    setopenKeys([keys[keys.length - 1]])
  }

  return (
    <Menu theme="dark"
      defaultSelectedKeys={[currentRoute.pathname]}
      mode="inline"
      items={items}
      onClick={menuClick}
      onOpenChange={handleChange}
      openKeys={openKeys} />
  )
}

export default Comp