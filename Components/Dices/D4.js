import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StyleDices from './styleDices';

class D4 extends React.Component {
	constructor(props) {
		super(props)
	}
	handleClick() {
		this.props.callback(4)
	}
	render() { 
		return (
			<View 
				style={StyleDices.container} 
				onStartShouldSetResponder={() => this.handleClick()}>
				<Text style={StyleDices.text}>D4</Text>
			</View>
		)
	}
}

export default D4;

