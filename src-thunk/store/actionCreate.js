import {CHANGE_VALUE,ADD_ITEM,DEL_ITEM,INIT_LIST} from './actionType';
import axios from 'axios';

export const COM_INIT_LIST_ACTION=()=>{
  return (dispatch)=>axios.get('/list.json')
    .then((res)=>{
      const data=res.data;
      const action=INIT_LIST_ACTION(data);
      dispatch(action)
    })
    .catch((err)=>{console.log(err)})
}
export const INIT_LIST_ACTION=(data)=>{
  return {
    type:INIT_LIST,
    data:data
  }
}
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
