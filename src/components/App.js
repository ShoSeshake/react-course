import React, { Component } from "react";
import "./App.css";
import {connect} from 'react-redux';
import {increment, decrement }from '../actions'


class App extends Component {
  render() {
    const props = this.props
    return (
      <div>
        Counter
          <div>{props.value}</div>
        <button name="+" onClick={ props.increment}>+</button>
        <button name="-" onClick={ props.decrement}>-</button>
      </div>
    );
  }
}

const mapStateToProps= state => ({value: state.count.value})
const mapDispatchToProps = ({increment,  decrement})
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),
// })

export default connect(mapStateToProps, mapDispatchToProps)(App);
