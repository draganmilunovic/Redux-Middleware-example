import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>{this.props.number}</h3> 
        <button onClick={this.props.INC_NUM}>Increase number</button>
        <button onClick={this.props.DEC_NUM}>Decrease number</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    number:state.number
  }
}

const mapDispachToProps = (dispach) => {
  return{
    INC_NUM:() => dispach({type:"INC_NUM",value:1}),
    DEC_NUM:() => dispach({type:"DEC_NUM",value:1})
  }
}

export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
