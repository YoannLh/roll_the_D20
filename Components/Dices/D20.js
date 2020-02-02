import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StyleDices from './styleDices';

class D20 extends React.Component {
	constructor(props) {
		super(props)
	}
	handleClick() {
		this.props.callback(20)
	}
	render() { 
		return (
			<View 
				style={StyleDices.container} 
				onStartShouldSetResponder={() => this.handleClick()}>
				<Text style={StyleDices.text}>D20</Text>
			</View>
		)
	}
}

export default D20;
