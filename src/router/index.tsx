/*
 * @Description: 
 * @Author: 滇西
 * @Date: 2022-11-01 22:48:35
 * @LastEditors: 滇西
 * @LastEditTime: 2022-11-12 10:56:43
 */

/* 传统写法 */

import App from "../App"
import Home from "../views/home/Home"

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import React, { lazy } from "react"
// const baseRouter = () => (
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App></App>}>
//         <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
//         <Route path="/home" element={<Home></Home>}></Route>
//         <Route path="/about" element={<About></About>}></Route>
//       </Route>
//     </Routes>
//   </BrowserRouter>
// )

const OverView = lazy(() => import('@/views/overView/Index'))
const Content = lazy(() => import('@/views/content/Index'))
const Role = lazy(()=>import('@/views/setting/role/Index'))
const User = lazy(()=>import('@/views/setting/user/Index'))
const Brand = lazy(()=>import('@/views/chart/brand/Index'))
const Error = lazy(()=>import('@/views/404'))
const Login  = lazy(()=>import('@/views/login/Index'))
/* 路由表写法 */

const withLoadingComponent = (component: JSX.Element) => (
  <React.Suspense fallback={<div>Loading...</div>}>
    {component}
  </React.Suspense>
)

const routes = [
  {
    path: '/',
    element: <Navigate to="/overView"></Navigate>
  },
  {
    path: '/',
    redirect:'/overView',
    element: <Home />,
    children: [
      {
        path: '/overView',
        element: withLoadingComponent(<OverView />)
      },
      {
        path: '/content',
        element: withLoadingComponent(<Content />)
      },
      {
        path: '/setting',
        redirect:'/setting/role',
        children:[
          {
            path: '/setting/role',
            element: withLoadingComponent(<Role />)
          },
          {
            path: '/setting/user',
            element: withLoadingComponent(<User />)
          },
        ]
      },
      {
        path: '/chart',
        redirect:'/chart/brand',
        children:[
          {
            path: '/chart/brand',
            element: withLoadingComponent(<Brand />)
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path:'*',
    element:withLoadingComponent(<Error></Error>)
  }
  // {
  //   path:'/home',
  //   element:<Home></Home>
  // },
  // {
  //   path:'/overView',
  //   element:withLoadingComponent(<OverView />)
  // },
  // {
  //   path:'about',
  //   element:withLoadingComponent(<About />)
  // }
]

export default routes 