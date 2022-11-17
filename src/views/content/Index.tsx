/*
 * @Description: 
 * @Author: 滇西
 * @Date: 2022-11-09 22:47:00
 * @LastEditors: 滇西
 * @LastEditTime: 2022-11-15 22:24:18
 */
import { useSelector,useDispatch } from "react-redux"
import { Button } from 'antd';
import { useState } from "react";

const Content = ()=>{
  const {num,name} = useSelector((state:RootState)=>({
    num:state.num,
    name:state.name
  }))

const dispatch = useDispatch()

const changeName = (e)=>{
  dispatch({type:'setName',value:'ahJet'})
}

  return (
    <div>
      <p>Content</p>
      <h3>{name}</h3>
      <Button type="primary" onClick={changeName}>修改state.name</Button>
    </div>
  )
}

export default Content