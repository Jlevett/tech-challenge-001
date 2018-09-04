import React, { Component } from "react";
import PropTypes from 'prop-types';

import DobInput from "./dynamicFormComponents/DobInput.js"
import NameInput from "./dynamicFormComponents/NameInput.js"
import GenderInput from "./dynamicFormComponents/GenderInput.js";
import ContactInput from "./dynamicFormComponents/ContactInput.js";
import GuardianInput from "./dynamicFormComponents/GuardianInput.js";

class DynamicForm extends Component {

   componentWillMount(){
     this.addIntialInputStates();

   }
   //Add input states from forms
   addIntialInputStates = () => {
    if(this.props.formDef.dob)
        this.setState({dob:''});
    if(this.props.formDef.name)
        this.setState({name:''});
    if(this.props.formDef.gender)
        this.setState({gender:''});
    if(this.props.formDef.contact){
        let contactArray = [];
        this.props.formDef.contact.types.forEach(function(type){
            let tempObj = {type:type, value: ''}
            contactArray.push(tempObj);
        });
        this.setState({contact:contactArray})

      }
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
          <DobInput dob={this.props.formDef.dob} dobUpdate={this.update}/>
        }
        {this.props.formDef.gender &&
          <GenderInput gender={this.props.formDef.gender} genderUpdate={this.update}/>
        }
        {this.props.formDef.contact &&
          <ContactInput contact={this.props.formDef.contact} contactUpdate={this.update}/>
        }
        {this.props.formDef.guardian &&
          <GuardianInput guardian={this.props.formDef.guardian} guardianUpdate={this.update}/>
        }
      {/*SUBMIT BUTTON*/}
        <input type="submit"  value="Submit"/>
      </form>
    );
  }
}

export default DynamicForm;

DynamicForm.propTypes = {
        formDef: PropTypes.object,
        onSuccessfulSubmit: PropTypes.func
  }



/*
require guardian consent
    checkbox
    optional
guardian details (name, contact)
    text based
    required/applicable if consent checkbox is ticked
  */