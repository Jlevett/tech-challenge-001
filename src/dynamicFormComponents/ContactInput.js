import React, { Component } from "react";

class ContactInput extends Component {

	state = {
		contact: ["",""]
	}

		contactUpdate = (contact, contactInputElement) => {

  		 // 	if (this.props.dob.required) {
		 //    if (!this.isDateinFuture(dob)) {
		 //      dateInputElement.setCustomValidity("Your birthday has to be in the past.");
		 //    } else if( !this.isOverMinAge(dob) && this.props.dob.minimumAge ){
		 //      dateInputElement.setCustomValidity(`You must be over ${this.props.dob.minimumAge} years old.`);
		 //    } else {
		 //      dateInputElement.setCustomValidity("");
		 //    }
		 // }

		this.setState({contact: contact})
	    this.props.contactUpdate("contact", contact);
	}


	render() {
		return (
		    <div>
		      	<label htmlFor="phonenum">{this.props.contact.label}</label><br/>
         		<input
         				id="phonenum"
         				type="tel"
         				pattern="^\d{4}-\d{3}-\d{4}$"
         		/>
		   </div>
		)
	}

 }

 export default ContactInput;

 //  required={this.props.dob.required}
 // value={this.state.dob}
	// 	          onChange={event => this.dateHandler(event.target.value, event.target)}

// Handle date input, update current state and parent state, customValidity logic
//(incl. MinimumAge, isDateInPast)
