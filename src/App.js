import './App.css';
import React from 'react';
import logo from './assets/img/Bridgelab.png'


class App extends React.Component{
  title1='Hello from BridgeLabz using variable'
  webPage='https://www.bridgelabz.com/'
  
  onClick = ($event) =>{
    console.log("save button is clicked!",$event)
    window.open(this.webPage)
  }
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
        <img src={logo} onClick={this.onClick} alt='The BridgeLabz Logo: a Bridge to Employment through lab works'></img>
      </div>
    );
  }
}

export default App;
