/*
 * @Description: 
 * @Author: 滇西
 * @Date: 2022-11-01 22:48:35
 * @LastEditors: 滇西
 * @LastEditTime: 2022-11-09 22:53:14
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
      }
    ]
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