import {CHANGE_VALUE,ADD_ITEM,DEL_ITEM} from './actionType'
export const CHANGE_VALUE_ACTION=(data)=>{
  return {
    type:CHANGE_VALUE,
    data:data
  }
}
export const ADD_ITEM_ACTION=()=>{
  return {
    type:ADD_ITEM,
  }
}
export const DEL_ITEM_ACTION=(index)=>{
  return {
    type:DEL_ITEM,
    index:index
  }
}
