import React, { Component } from "react";
import "./App.css";
import PropTypes from 'prop-types'


// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <div className="header">
//           <h1>Hello World</h1>
//         </div>
//         <div>{
//           profiles.map((profile, index) => {
//             return <User name={profile.name} age={profile.age} key={index}/>
//           })
//           }

//         </div>
//       </React.Fragment>
//     );
//   }
// }

const App = () => {
  return (<Counter></Counter>);
};

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {count:0}
  };

  handlePlusButton = () => {
    this.setState({count: this.state.count + 1})
  }

  handleMinusButton = () => {
    this.setState({count: this.state.count - 1})
  }
  render() {
    return (
      <div>
        Counter
          <div>{this.state.count}</div>
        <button name="+" onClick={() =>{ this.handlePlusButton()}}>+</button>
        <button name="-" onClick={() =>{ this.handleMinusButton()}}>-</button>
      </div>
    );
  }
}


// const profiles= [
//   {name:"taro",age:10},
//   {name:"hanako",age:18},

// ]

// const User = (props) => {
//   return(
//     <div>{props.name}<br/>{props.age}</div>
//   );
// };

// User.PropTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number
// }


export default App;
