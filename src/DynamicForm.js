import React, { Component } from "react";

class DynamicForm extends Component {

  state = {

  }

  //When the submit button is pressed
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSuccessfulSubmit(this.state);
  }

  render() {
// console.log( this.props.formDef.name.words === 2 )

    return (

      <form onSubmit={this.handleSubmit}>

        {this.props.formDef.title &&
          <h1>{this.props.formDef.title}</h1>
        }

        {/*NAME OPTION*/}
        {this.props.formDef.name &&
          <div style={{'display':'block'}}>
            <label htmlFor="fullname">{this.props.formDef.name.label}</label>
            <input
              id="fullname"
              type="text"
              placeholder={this.props.formDef.name.placeholder}
              pattern={this.props.formDef.name.words === 2 ? "^[A-z]+ [A-z]+$" : "[A-z]"}
              onChange = {event => this.setState({'name':event.target.value})}
              required= {this.props.formDef.name.required}
            />
          </div>
        }


      {/*SUBMIT BUTTON*/}
        <input type="submit"  value="Submit"/>
      </form>
    );
  }
}

export default DynamicForm;
//
   // {/*
   //      date of birth
   //          date based
   //          required, should be older than 18
   //      */}
{/*DATE OF BIRTH OPTION*/}
      // {this.props.formDef.name &&
      //   <div>
      //   <label htmlFor="dob">Date of Birth</label>
      //   <input
      //     id="dob"
      //     type="date"
      //     required
      //   />
      // </div>
      // }

   //      {/*
   //      gender
   //          options based (male/female)
   //          optional
   //      */}
   //      <fieldset data-role="controlgroup">
   //      <legend>Choose your gender:</legend>
   //        <label htmlFor="male">Male</label>
   //        <input type="radio" name="gender" id="male" value="male"/>
   //        <label htmlFor="female">Female</label>
   //        <input type="radio" name="gender" id="female" value="female"/>
   //      </fieldset>

   //      {/*
   //      contact number
   //        text based
   //        optional
   //         allow for multiple values (e.g. mobile, home, etc)
   //      */}
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