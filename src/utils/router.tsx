/*
 * @Description: 
 * @Author: 滇西
 * @Date: 2022-11-07 21:22:45
 * @LastEditors: 滇西
 * @LastEditTime: 2022-11-09 22:34:05
 */
import {useNavigate} from 'react-router-dom'
const navigateTo = useNavigate()
const navigate = (router:string)=>{
  navigateTo(router)
}
export {
  navigate
}