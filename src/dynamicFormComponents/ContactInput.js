import React, { Component } from "react";
import PropTypes from 'prop-types';

//This class dynamically allows for multiple contact values (e.g. mobile, home, etc)
class ContactInput extends Component {

	componentWillMount(){
		//Before the first render createIntialState must be called
		this.createIntialState();
	}
	//Creates the intial state of contact which.,
	// is blank. For example -> contact: [{'Mobile':''},{'Home':''}]
	createIntialState = () => {
		let contactArray = [];
		this.props.contact.types.forEach(function(type){
			let tempObj = {type: type, value: ''}
			contactArray.push(tempObj);
		});
		this.setState({contact: contactArray})
	}

	// Handle contact input, update current state and parent state, customValidity logic
	contactUpdate = (valueEntered, contactInputElement, index) => {
		const validNumberRegEx = /(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/
		let isValidNumber = validNumberRegEx.test(valueEntered);//Regexe Test

		this.setState((prevState) => {
				prevState.contact[index].value = valueEntered;
				return prevState;
		});
		this.props.contactUpdate('contact', this.state.contact);
		//Only enforce rules if the input is required.
		if (this.props.contact.required) {
				contactInputElement.setCustomValidity(isValidNumber ? "" : "Please enter a valid contact number");
		}
	}

	render() {
		return (
			<div>
				<label>{this.props.contact.label}</label><br/>
		    	{this.props.contact.types.map((type,index) => {
		    		return(
		    			<div key={type}>
	      					<label htmlFor={type}>{`${type}: `}</label>
     						<input
     							id={type}
     							type="tel"
	    						required={this.props.contact.required}
	    						value={this.state.contact[index].value}
	    						onChange={event => this.contactUpdate(event.target.value, event.target, index)}
	    						placeholder={this.props.contact.placeholder[index]}
     						/>
         				</div>
         		)})}
		   </div>
		)
	}
 }

export default ContactInput;

ContactInput.propTypes = {
        contact: PropTypes.object,
        contactUpdate: PropTypes.func
  }

