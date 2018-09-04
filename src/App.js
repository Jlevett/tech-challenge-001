import React, { Component } from "react";
import DynamicForm from "./DynamicForm.js"
//Form definition that is passed to Dynamic From as a prop
import formDefinition1  from "./formDefinition1.json";
import formDefinition2  from "./formDefinition2.json";
import formDefinition3  from "./formDefinition3.json";

class App extends Component {
  //Form provides the resulting form data on successful submission.
  onSuccessfulSubmit = (output) => {
    console.log(output)
    alert(JSON.stringify(output));
    alert("Check out the console for the non-stringify result")
  }

  render() {
    return (
      <div className="App">
        <DynamicForm formDef={formDefinition1} onSuccessfulSubmit={this.onSuccessfulSubmit}/>
        <DynamicForm formDef={formDefinition2} onSuccessfulSubmit={this.onSuccessfulSubmit}/>
        <DynamicForm formDef={formDefinition3} onSuccessfulSubmit={this.onSuccessfulSubmit}/>
      </div>
    );
  }
}

export default App;
