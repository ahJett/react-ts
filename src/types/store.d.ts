/*
 * @Description: 
 * @Author: 滇西
 * @Date: 2022-11-15 22:22:25
 * @LastEditors: 滇西
 * @LastEditTime: 2022-11-15 22:27:30
 */

// TS提供了ReturnType，用来获取函数类型的返回值
type RootState = ReturnType<typeof import('@/store/Index').getState>
interface Window{
  __REDUX_DEVTOOLS_EXTENSION__:function
}