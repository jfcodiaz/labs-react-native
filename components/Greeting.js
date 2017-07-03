import React, {Component} from 'react';
import { AppRegistry, Text, View} from 'react-native';

class Greeting extends Component{
	render() {
		return (
			<Text style={this.props.style}>Hello {this.props.name}</Text>
		);
	}
};

export default Greeting;