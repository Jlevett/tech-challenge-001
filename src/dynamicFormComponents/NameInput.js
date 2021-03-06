import React, { Component } from "react";
import PropTypes from 'prop-types';

class NameInput extends Component {

	state = {
		name: ""
	}

	// Handle name input, update current state and parent state,
	// customValidity logic (for two word input).
	nameHandler = (name, nameInputElement) => {
		this.setState({name: name})
	    this.props.nameUpdate("name", name);
		//Only enforce rules if the input is required.
	    if (this.props.name.required) {
			let isTwoSeperateWordsOnlyLetters = /^[A-z]+ [A-z]+$/.test(name); //regExTest for input.
		    nameInputElement.setCustomValidity(isTwoSeperateWordsOnlyLetters ? "" : "Enter both first and last name only");
		 }
	}

	render(){
		return(
	    	<div>
	            <label htmlFor="name">{this.props.name.label}</label><br/>
	            <input
	              id="name"
	              type="text"
	              placeholder={this.props.name.placeholder}
	              required= {this.props.name.required}
     			  value={this.state.name}
		          onChange={event => this.nameHandler(event.target.value, event.target)}
	            />
	          </div>
		)
	}
}

export default NameInput;

NameInput.propTypes = {
        name: PropTypes.object,
        nameUpdate: PropTypes.func
  }