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
      userName: '',
      nameError:''
    }
  }

  onNameChange =(event) =>{
    console.log("value is",event.target.value);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');

    this.setState({userName:event.target.value})
    if(nameRegex.test(event.target.value)){
      this.setState({ nameError:''})
    }
    else{
      this.setState({nameError:'Name is incorrect'})
    }
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
        <input class='input' onChange={this.onNameChange}></input>
        <span className='error-output'>{this.state.nameError}</span>
      </div>
      </> 
    );
  }
}

export default App;
