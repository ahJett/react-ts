/*
 * @Description: 
 * @Author: 滇西
 * @Date: 2022-11-15 21:25:31
 * @LastEditors: 滇西
 * @LastEditTime: 2022-11-15 21:52:06
 */
import { legacy_createStore } from "redux";
import reducer from './Reducer'
legacy_createStore(reducer)

// 创建数据仓库
const store =  legacy_createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store