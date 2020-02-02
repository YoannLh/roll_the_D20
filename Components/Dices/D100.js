import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StyleDices from './styleDices'

class D100 extends React.Component {
	constructor(props) {
		super(props)
	}
	handleClick() {
		this.props.callback(100)
	}
	render() { 
		return (
			<View 
				style={StyleDices.container} 
				onStartShouldSetResponder={() => this.handleClick()}>
				<Text style={StyleDices.text}>D100</Text>
			</View>
		)
	}
}

export default D100;

