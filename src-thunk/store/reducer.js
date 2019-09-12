import {CHANGE_VALUE,ADD_ITEM,DEL_ITEM,INIT_LIST} from './actionType'
const defaultSate={
  value:'',
  list:[]
};
export default (state=defaultSate,action)=>{
  if (action.type===INIT_LIST) {
    const newState=JSON.parse(JSON.stringify(state));
    newState.list.push([...action.data]);;
    return newState;
  };
  if (action.type===CHANGE_VALUE) {
    const newState=JSON.parse(JSON.stringify(state));
    newState.value=action.data;
    return newState;
  };
  if (action.type===ADD_ITEM) {
    const newState=JSON.parse(JSON.stringify(state));
    newState.list.push(newState.value);
    newState.value='';
    return newState;
  };
  if (action.type===DEL_ITEM) {
    const newState=JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index,1);
    return newState;
  };
  return state;
}