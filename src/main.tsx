/*
 * @Description: 
 * @Author: 滇西
 * @Date: 2022-10-31 21:20:02
 * @LastEditors: 滇西
 * @LastEditTime: 2022-11-10 21:18:36
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
// 样式初始化一般放在最前面
import 'reset-css'
// UI框架的样式
import 'antd/dist/antd.css'
// 全局样式
import '@/assets/style/global.scss'
// 组件的样式
import App from './App'
import {BrowserRouter} from 'react-router-dom'
// import Router from "@/router"

// 状态管理
import { Provider } from 'react-redux'
import store from '@/store/Index'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
    {/* <Router /> */}
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </React.StrictMode>
  </Provider>
)
