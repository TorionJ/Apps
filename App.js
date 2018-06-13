import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharComponent from './UserInput/UserInput';
import ValidationComponent from './UserOutput/UserOutput';

class App extends Component {
  state = { 
    userInput: "",
  }
   userInput = (event) =>{
    this.setState({
      userInput: event.target.value}
    )
  }
  
  deleteCharHandler = (index) =>{
    const text = this.state.userInput.split('')
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({
      userInput: updatedText
    });
  }
  render() {

    const charsList = this.state.userInput.split('').map((ch, index) => {
      return <CharComponent character={ch} key={index} clicked={() =>this.deleteCharHandler(index)}/>
    });

    return (
      <div className="App">
        <input type="text" onChange={this.userInput} value={this.state.userInput} />
        <ValidationComponent input={
          this.state.userInput.length >= 5 ? "Text long enough" : "Text too short"} />
        {charsList}
      </div>
    );
  }
}

export default App;
