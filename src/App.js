import React from "react";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";
import './App.css'

class App extends React.Component {
  render() {
    return <div> 
    <ClassComponent />
    <FunctionalComponent />
    </div>

  }
}

export default App;