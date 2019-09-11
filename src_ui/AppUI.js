import React, { Component } from 'react';
class AppUI extends Component {
  constructor(props){
    super(props);
    
  }
  //1个方法
  del(index){
    this.props.onClicks(index)
  }
  
  render(){
    return (
      <div className="App">
      <input onChange={this.props.onChange} value={this.props.value}/>
      <button onClick={this.props.onClick}>添加</button>
      {
        this.props.list.map((item,index)=>{
                                  
          return <div key={index} 
          // onClick={()=>{this.del(index)}}
          // onClick={this.props.onClicks.bind(this,index)}
          onClick={()=>this.props.onClicks(index)}
          >{item}</div>
        })
      }
    </div>
  );
  }
  
}

export default AppUI;
