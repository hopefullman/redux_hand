


import React, { Component } from 'react';
import store from './store/store';
import logo from './logo.svg';
import {CHANGE_VALUE_ACTION,DEL_ITEM_ACTION,ADD_ITEM_ACTION} from './store/actionCreate';

class App extends Component {
  constructor(props){
    super(props);
    this.subscribeStore=this.subscribeStore.bind(this)
    this.state=store.getState();
    store.subscribe(this.subscribeStore);
  }
  subscribeStore(){
    this.setState(store.getState())
  }
  onchange(e){
    const action=CHANGE_VALUE_ACTION(e.target.value)
    store.dispatch(action);
  }
  onclick(){
    const action=ADD_ITEM_ACTION()
    store.dispatch(action)
  }
  delet(index){
    const action=DEL_ITEM_ACTION(index)
    store.dispatch(action)
  }
  render(){
    return (
    <div className="App">
      <input onChange={this.onchange.bind(this)} value={this.state.value}/>
      <button onClick={this.onclick.bind(this)}>添加</button>
      {
        this.state.list.map((item,index)=>{
          return <div key={index} onClick={()=>{this.delet(index)}}>{item}</div>
        })
      }
    </div>
  );
  }
  
}

export default App;
