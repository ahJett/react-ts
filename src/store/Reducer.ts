/*
 * @Description: 
 * @Author: 滇西
 * @Date: 2022-11-15 21:26:13
 * @LastEditors: 滇西
 * @LastEditTime: 2022-11-15 22:06:45
 */
const defaultState = {
  num:20,
  name:'ahjet'
}
let reducer = (state = defaultState,action:{type:string,value:any})=>{
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'setName':
      newState.name = action.value
      break;
  
    default:
      break;
  }


  return newState
}

export default reducer