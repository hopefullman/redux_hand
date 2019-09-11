// import React, { Component } from 'react';
// import store from './store/store';
// import logo from './logo.svg';

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.subscribeStore=this.subscribeStore.bind(this)
//     this.state=store.getState();
//     store.subscribe(this.subscribeStore);
//   }
//   subscribeStore(){
//     this.setState(store.getState())
//   }
//   onchange(e){
//     const action={
//       type:'change_value',
//       data:e.target.value
//     }
//     store.dispatch(action);
//   }
//   onclick(){
//     const action={
//       type:'add_item'
//     }
//     store.dispatch(action)
//   }
//   delet(index){
//     const action={
//       type:'del_item',
//       index:index
//     }
//     store.dispatch(action)
//   }
//   render(){
//     return (
//     <div className="App">
//       <input onChange={this.onchange.bind(this)} value={this.state.value}/>
//       <button onClick={this.onclick.bind(this)}>添加</button>
//       {
//         this.state.list.map((item,index)=>{
//           return <div key={index} onClick={()=>{this.delet(index)}}>{item}</div>
//         })
//       }
//     </div>
//   );
//   }
  
// }

// export default App;


import React, { Component } from 'react';
import store from './store/store';
import logo from './logo.svg';
import {CHANGE_VALUE_ACTION,DEL_ITEM_ACTION,ADD_ITEM_ACTION} from './store/actionCreate';
import AppUI from './AppUI';
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
    alert(index)
    const action=DEL_ITEM_ACTION(index)
    store.dispatch(action)
  }
  render(){
    return (                                                                      
      <AppUI value={this.state.value} 
             onChange={this.onchange.bind(this)}
             onClick={this.onclick.bind(this)} 
             list={this.state.list} 
             onClicks={this.delet.bind(this)}          //1个方法
             
             />
  );
  }
  
}

export default App;
