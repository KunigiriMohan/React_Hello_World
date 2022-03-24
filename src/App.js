import './App.css';
import React from 'react';
class App extends React.Component{
  title1='Hello from BridgeLabz using variable'
  
  constructor(){
    super()
    this.state={
      title: 'Hello from BridgeLabz using state'
    }
  }

  render(){
    return(
      <div>
        <h1>{this.state.title}</h1>
        <h2>{this.title1}</h2>
      </div>
    );
  }
}

export default App;
