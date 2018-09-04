import React, { Component } from "react";
import DateInput from "./dynamicFormComponents/DateInput.js"
import NameInput from "./dynamicFormComponents/NameInput.js"
class DynamicForm extends Component {

  state = {
  }

   componentWillMount(){
     //add Date Of Birth to state if it is part of the form
     if(this.props.formDef.dob)
      this.setState({dob:''});
     if(this.props.formDef.name)
      this.setState({name:''});
   }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSuccessfulSubmit(this.state);
  }


  update =(key, value) => {
    let tempObj = {};
    tempObj[key] = value;
    this.setState(tempObj);
  }

  render() {
    return (

      <form onSubmit={this.handleSubmit}>
        {this.props.formDef.title &&
          <h1>{this.props.formDef.title}</h1>
        }
        {this.props.formDef.name &&
          <NameInput name={this.props.formDef.name} nameUpdate={this.update}/>
        }
        {this.props.formDef.dob &&
          <DateInput dob={this.props.formDef.dob} dobUpdate={this.update}/>
        }

      {/*SUBMIT BUTTON*/}
        <input type="submit"  value="Submit"/>
      </form>
    );
  }
}

export default DynamicForm;


 //


   //      <fieldset data-role="controlgroup">
   //      <legend>Choose your gender:</legend>
   //        <label htmlFor="male">Male</label>
   //        <input type="radio" name="gender" id="male" value="male"/>
   //        <label htmlFor="female">Female</label>
   //        <input type="radio" name="gender" id="female" value="female"/>
   //      </fieldset>

   //      <label htmlFor="phonenum">Phone Number:</label><br/>
   //      <input id="phonenum" type="tel" pattern="^\d{4}-\d{3}-\d{4}$"/>

   //      {/*
   //      require guardian consent
   //        checkbox
   //        optional
   //      */}

   //      {/*
   //      guardian details (name, contact)
   //          text based
   //          required/applicable if consent checkbox is ticked
   //      */}

