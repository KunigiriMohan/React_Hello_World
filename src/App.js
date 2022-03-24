import './App.css';
import React from 'react';
import logo from './assets/img/Bridgelab.png'


class App extends React.Component{
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
      <body>
        <div class='main'>
      <div>
        <h1>Hello {this.state.userName} from BridgeLabz using variable</h1>
        <img src={logo} onClick={this.onClick} alt='The BridgeLabz Logo: a Bridge to Employment through lab works'></img>
      </div>
      <div>
        <input class='input' onChange={this.onNameChange}></input>
        <span className='error-output'>{this.state.nameError}</span>
      </div>
      <p>At Bridgelabz ,we re a techie commuminity of </p>
      <ol>
        <li>Technologies</li>
        <li>Thinkers</li>
        <li>Builders</li>
      </ol>
      <p>
          Working together to keep the Tech Emolybility of engineers alive and accesible,
          so TechCompanies woe=rldwode can get contributers and creators for Technology Solutions.
          We believe this act of human collabration across an employability platform is essential
          to individual growth and our collective future.
      </p>
      <p>To know about us , visit <a href="https://www.bridgelabz.com/" >Bridgelab</a>
        to learn even more about our mission i,e. <strong>Employibility to all</strong>
      </p>
      </div>
      </body> 
    );
  }
}

export default App;
