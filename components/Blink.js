import React, {Component} from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';

class Blink extends Component {
	constructor(props){
		super(props);
		this.state = {
			showText : true
		};
		setInterval(() => {
			this.setState(previousState => {
				return { showText: !previousState.showText };
			});
		}, 1000);
	}

	render() {
		let display = this.state.showText ? this.props.text : '';
		return (
			<Text style={this.props.style}>{display}</Text>
		);
	}
}
export default Blink;