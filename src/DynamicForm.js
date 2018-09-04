import React, { Component } from "react";

class DynamicForm extends Component {



  render() {
    return (
      <form>

        {/*Title of Page*/}
        <h1>{this.props.formDef.title}</h1>

        {/*
        name
          text based
          should enforce the need for a first and last name (separated by a space)
        */}
        <label for="fullname">Full Name:</label>
        <input type="text" id="fullname" placeholder="Full Name" required/>

        {/*
        date of birth
            date based
            required, should be older than 18
        */}
        <label for="dob">Date of Birth</label>
        <input id="dob" type="date" required/>

        {/*
        gender
            options based (male/female)
            optional
        */}
        <fieldset data-role="controlgroup">
        <legend>Choose your gender:</legend>
          <label for="male">Male</label>
          <input type="radio" name="gender" id="male" value="male"/>
          <label for="female">Female</label>
          <input type="radio" name="gender" id="female" value="female"/>
        </fieldset>

        {/*
        contact number
          text based
          optional
           allow for multiple values (e.g. mobile, home, etc)
        */}
        <label for="phonenum">Phone Number:</label><br/>
        <input id="phonenum" type="tel" pattern="^\d{4}-\d{3}-\d{4}$"/>

        {/*
        require guardian consent
          checkbox
          optional
        */}

        {/*
        guardian details (name, contact)
            text based
            required/applicable if consent checkbox is ticked
        */}
        <input type="submit" data-inline="true" value="Submit"/>
      </form>
    );
  }
}

export default DynamicForm;
