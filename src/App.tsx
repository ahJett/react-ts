/*
 * @Description: 
 * @Author: 滇西
 * @Date: 2022-10-31 21:20:02
 * @LastEditors: 滇西
 * @LastEditTime: 2022-11-06 21:24:57
 */
import { useState } from 'react'
import reactLogo from '@/assets/react.svg'
import { Button } from 'antd'
import { UpCircleOutlined } from '@ant-design/icons'
import {Outlet,Link,useRoutes} from 'react-router-dom'
import router from '@/router'

function App() {
  const [count, setCount] = useState(0)
  const outlet = useRoutes(router)
  return (
    <div className="App">
  
     {/* 占位符组件 类似于窗口 类似于vue router-view */}
     {/* <Outlet></Outlet> */}
     {outlet}
    </div>
  )
}

export default App
