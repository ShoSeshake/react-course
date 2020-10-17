import React, { Component } from "react";
import "./App.css";
import PropTypes from 'prop-types'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="header">
          <h1>Hello World</h1>
        </div>
        <div>{
          profiles.map((profile, index) => {
            return <User name={profile.name} age={profile.age} key={index}/>
          })
          }

        </div>
      </React.Fragment>
    );
  }
}

// const App = () => {
//   return (<div>
//     <User name={"taro"} age={14}/>
//     </div>);
// };
const profiles= [
  {name:"taro",age:10},
  {name:"hanako",age:18},

]

const User = (props) => {
  return(
    <div>{props.name}<br/>{props.age}</div>
  );
};

User.PropTypes = {
  name: PropTypes.string,
  age: PropTypes.number
}


export default App;
