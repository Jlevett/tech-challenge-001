import React, { Component } from "react";

class NameInput extends Component {

	state = {
		name:''
	}

	nameHandler = (name, nameInputElement) =>{
		this.setState({name:name})
	    this.props.nameUpdate('name', name);
	    if(this.props.name.required){
			let isTwoSeperateWordsOnlyLetters = /^[A-z]+ [A-z]+$/.test(name); //regExTest for name.
		    nameInputElement.setCustomValidity(isTwoSeperateWordsOnlyLetters ? "" : "Enter both first and last name only");
		 }
	}

	render(){
		return(
	    	<div>
	            <label htmlFor="name">{this.props.name.label}</label>
	            <input
	              id="name"
	              type="text"
	              placeholder={this.props.name.placeholder}
	              required= {this.props.name.required}
     			  value={this.state.name}
		          onChange = {event => this.nameHandler(event.target.value, event.target)}
	            />
	          </div>
		)
	}
}

export default NameInput;
