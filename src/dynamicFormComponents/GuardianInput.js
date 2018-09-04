import React, { Component } from "react";
import PropTypes from "prop-types";

class GuardianInput extends Component {
	state = {
		checked: false,
		guardian: {
			name: "",
			contact:""
		}
	}

	componentDidMount(){
		this.ifRequiredTickCheckedBox();
	}

	//Ticks checkbox (as readonly) if required by the JSON-form defintion
 	ifRequiredTickCheckedBox = () => {
 		if(this.props.guardian.required)
			this.setState({checked:true})
 	}

 	//If the checkBox has been clicked, then follow actions
	onConsentClicked = () =>{
		//If the checked box is unselected, delete all information in parent, as guardian data is not sent back.
		if(this.state.checked){
		 	this.props.guardianUpdate("guardian", {name: "", contact: ""});
		}
		//Change the checkbox, unless it is required as per JSON-form defintion, then it is essentially "readonly"
		if(!this.props.guardian.required) {
			 this.setState(prevState => {
			 	prevState.checked = !prevState.checked;
			 	return prevState;
			})
		}
	}

	// Handle date input, update current state and parent state, customValidity logic
	//(Has to be a valid phone number)
	contactHandler = (valueEntered, contactInputElement) => {
		this.setState(prevState => {
			prevState.guardian = {name: prevState.guardian.name, contact: valueEntered}
			return prevState;
		});
		const validNumberRegEx = /(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/
		let isValidNumber = validNumberRegEx.test(valueEntered);//Regex Test for valid phone number
		contactInputElement.setCustomValidity(isValidNumber ? "" : "Please enter a valid contact number");
		this.props.guardianUpdate("guardian", {name: this.state.guardian.name, contact: valueEntered});
	}

	//Handle date input, update current state and parent state,
	//customValidity logic (for two word input).
	nameHandler = (nameEntered, nameInputElement) => {
		this.setState(prevState => {
			prevState.guardian = {name:nameEntered, contact:prevState.guardian.contact}
			return prevState;
		});
		let isTwoSeperateWordsOnlyLetters = /^[A-z]+ [A-z]+$/.test(nameEntered); //regExTest for input.
		nameInputElement.setCustomValidity(isTwoSeperateWordsOnlyLetters ? "" : "Enter both first and last name only");
		this.props.guardianUpdate("guardian", {name: nameEntered, contact: this.state.guardian.contact});
	}

	render(){
		return(
			<div>
	    		<label htmlFor={this.props.guardian.label}>{this.props.guardian.label}</label>
				<input
					type="checkbox"
					id={this.props.guardian.label}
					checked={this.state.checked}
					onChange={this.onConsentClicked}
					/>
				<br/>
				{this.state.checked &&
					<div>
						<label htmlFor="gname">Guardian Name: </label>
				        <input
				            id="gname"
				            type="text"
				            placeholder="Joe Levett"
				            value={this.state.guardian.name}
				            onChange={event => {this.nameHandler(event.target.value, event.target)}}
				            required={this.state.checked}
				        />
				        <br/>
						<label htmlFor="gcontact">Guardian Contact: </label>
				        <input
				            id="gcontact"
				            type="text"
				            placeholder="0415 783 333"
				            value={this.state.guardian.contact}
				            onChange={event => {this.contactHandler(event.target.value, event.target)}}
				            required={this.state.checked}
				        />
				    </div>
				}
	    	</div>
		)
	}
}

export default GuardianInput;

GuardianInput.propTypes = {
        guardian: PropTypes.object,
        guardianUpdate: PropTypes.func
  }