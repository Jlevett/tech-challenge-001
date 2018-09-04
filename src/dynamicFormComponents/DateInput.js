import React, { Component } from "react";

class DateInput extends Component {

	state = {
		dob:''
	}


	dateHandler = (dob, dateInputElement)=>{
	    this.setState({dob:dob})
	    this.props.dobUpdate('dob', dob);

	    if (!this.isDateinFuture(dob)){
	      dateInputElement.setCustomValidity("Your birthday has to be in the past.");
	    }
	    else if(!this.isOverMinAge(dob) && this.props.dob.minimumAge){
	      dateInputElement.setCustomValidity(`You must be over ${this.props.dob.minimumAge} years old.`);
	    }
	    else {
	      dateInputElement.setCustomValidity("");
	    }
	}

  	//Checks to see if the dob is over the minimum age specified
 	 isOverMinAge = (dob) =>{
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
		      <label htmlFor="dob">{this.props.dob.label}</label>
		        <input
		          id="dob"
		          type="date"
		          min='1899-01-01'
		          required={this.props.dob.required}
		          value={this.state.dob}
		          onChange = {event => this.dateHandler(event.target.value, event.target)}
		        />
		   </div>
		)
	}

 }

 export default DateInput;