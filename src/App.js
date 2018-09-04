import React, { Component } from "react";
import logo from "./logo.svg";
import DynamicForm from "./DynamicForm.js"
//Form definition that is passed to Dynamic From as a prop
import formDefinition  from "./formDefinition.json";



class App extends Component {
  //Form provides the resulting form data on successful submission.
  onSuccessfulSubmit = (output) => {
    console.log(output)
    alert(JSON.stringify(output));
  }

  render() {
    return (
      <div className="App">
        <DynamicForm formDef={formDefinition} onSuccessfulSubmit ={this.onSuccessfulSubmit} />
      </div>
    );
  }
}

export default App;
