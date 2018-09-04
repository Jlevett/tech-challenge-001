import React, { Component } from "react";
import PropTypes from 'prop-types';

class GuardianInput extends Component {

render(){
	return(
		<p>guardian part: working progress</p>
		)
}
}

export default GuardianInput;

GuardianInput.propTypes = {
        guardian: PropTypes.object,
        guardianUpdate: PropTypes.func
  }