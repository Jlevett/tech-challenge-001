import React, { Component } from "react";
import DateInput from "./dynamicFormComponents/DateInput.js"
import NameInput from "./dynamicFormComponents/NameInput.js"
import GenderInput from "./dynamicFormComponents/GenderInput.js";
import ContactInput from "./dynamicFormComponents/ContactInput.js";
class DynamicForm extends Component {

  state = {
  }

   componentWillMount(){
     this.addInputStates();

   }
   //Add input states
   addInputStates = () => {
     if(this.props.formDef.dob)
      this.setState({dob:''});
     if(this.props.formDef.name)
      this.setState({name:''});
     if(this.props.formDef.gender)
      this.setState({gender:''});
    if(this.props.formDef.contact)
      this.setState({contact: ["",""]});//FIX
   }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSuccessfulSubmit(this.state);
  }

  //Allows the child elements to update the state of inputs
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
        {this.props.formDef.gender &&
          <GenderInput gender={this.props.formDef.gender} genderUpdate={this.update}/>
        }
        {this.props.formDef.contact &&
          <ContactInput contact={this.props.formDef.contact} contactUpdate={this.contact}/>
        }
      {/*SUBMIT BUTTON*/}
        <input type="submit"  value="Submit"/>
      </form>
    );
  }
}

export default DynamicForm;


 //


   //

   //

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

