import React, { Component } from "react";
import PropTypes from 'prop-types';

class DobInput extends Component {

	state = {
		dob: ""
	}

	// Handle date input, update current state and parent state, customValidity logic
	//(incl. MinimumAge, isDateInPast)
	dateHandler = (dob, dateInputElement) => {
	    this.setState({dob: dob})
	    this.props.dobUpdate("dob", dob);
	    //Only enforce rules if the input is required.
  		if (this.props.dob.required) {
		    if (!this.isDateinFuture(dob)) {
		      dateInputElement.setCustomValidity("Your birthday has to be in the past.");
		    } else if( !this.isOverMinAge(dob) && this.props.dob.minimumAge ){
		      dateInputElement.setCustomValidity(`You must be over ${this.props.dob.minimumAge} years old.`);
		    } else {
		      dateInputElement.setCustomValidity("");
		    }
		 }
	}

  	//Check to see if the dob is over the minimum age specified
 	 isOverMinAge = (dob) => {
      	let currentDate = new Date();
      	let minimumDateRequired = currentDate.setFullYear(currentDate.getFullYear() - this.props.dob.minimumAge);
     	let birthDate = new Date(dob).setHours(0);
     	return birthDate < minimumDateRequired ? true : false;
  	}

  	//Check to see date is in past
  	isDateinFuture = (dob) => {
    	let currentDate = new Date();
    	let birthDate = new Date(dob).setHours(0);
    	return birthDate < currentDate ? true : false;
  	}

	render() {
		return (
		    <div>
		      	<label htmlFor="dob">{this.props.dob.label}</label><br/>
		        <input
		          id="dob"
		          type="date"
		          min="1899-01-01"
		          required={this.props.dob.required}
		          value={this.state.dob}
		          onChange={event => this.dateHandler(event.target.value, event.target)}
		        />
		   </div>
		)
	}

 }

 export default DobInput;

DobInput.propTypes = {
        dob: PropTypes.object,
        dobUpdate: PropTypes.func
  }