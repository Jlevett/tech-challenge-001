import React, { Component } from "react";
import logo from "./logo.svg";
//Customized component
import DynamicForm from "./DynamicForm.js"
//form definition that is passed to Dynamic From as a prop
import formDefinition  from "./formDefinition.json";



class App extends Component {

  render() {

    // console.log(formDefinition)
    // console.log(JSON.parse(formDefinition));
    return (
      <div className="App">
        <DynamicForm formDef={formDefinition}/>
      </div>
    );
  }
}

export default App;
 //