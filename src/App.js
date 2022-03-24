import './App.css';
import React from 'react';
import logo from './assets/img/Bridgelab.png'


class App extends React.Component{
  userName=''
  webPage='https://www.bridgelabz.com/'
  
  onClick = ($event) =>{
    console.log("save button is clicked!",$event)
    window.open(this.webPage)
  }
  constructor(){
    super()
    this.state={
      userName: ''
    }
  }

  onNameChange =(event) =>{
    console.log("value is",event.target.value);
    this.setState({userName:event.target.value})
  }

  render(){
    return(
      <>
      <div>
        <h1>Hello {this.state.userName} from BridgeLabz using variable</h1>
        <h2>Hello {this.title1} from BridgeLabz using variable</h2>
        <img src={logo} onClick={this.onClick} alt='The BridgeLabz Logo: a Bridge to Employment through lab works'></img>
      </div>
      <div>
        <input class='input' onChange={this.onNameChange}/>
      </div>
      </>
    );
  }
}

export default App;
