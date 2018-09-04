import React, { Component } from "react";

class GenderInput extends Component {

	// Handle date input, update current state and parent state
	radioButtonChanged = (gender) => {
	   this.setState({gender: gender})
	   this.props.genderUpdate("gender", gender);
	}

	render() {
		return (
			<div >
		    	<label>{this.props.gender.label}</label>
		    	{this.props.gender.options.map(option => {
		    		return(
		    			<div key={option} style={{display : 'inline-block'}}>
		    				<label htmlFor={option}>{option}</label>
		    				<input
		    					type="radio"
		    					name="gender"
		    					id={option}
		    					value={option}
		    					required={this.props.gender.required}
		    					onChange={event => this.radioButtonChanged(event.target.value)}
		    				/>
		    			</div>
		    	)})}


		    </div>
			)
	}

 }

 export default GenderInput;
