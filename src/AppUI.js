import React, { Component } from 'react';
class AppUI extends Component {
  constructor(props){
    super(props);
    
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

export default AppUI;
