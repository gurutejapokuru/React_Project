import React, { Component } from 'react';
import HomePage from "./homePage";
import Results from "./Results";

import './App.css';
let arr = [];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewResults:false,
      viewForm:true,
      ResultArr:[],
      ResultObj:{}
    }
  }
  updateState(result)
  {
    arr.push(result)
    this.setState({viewForm:false,viewResults:true,ResultArr:arr});
  }
  
  render()
  {
    return (
      <div className="App">
        {this.state.viewForm && <HomePage parent = {this}  />}
        {this.state.viewResults && <Results parent = {this} data = {this.state.ResultArr}/>}
      </div>
    );
  }
}

export default App;
