import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StyleDices from './styleDices';

class D12 extends React.Component {
	constructor(props) {
		super(props)
	}
	handleClick() {
		this.props.callback(12)
	}
	render() { 
		return (
			<View 
				style={StyleDices.container} 
				onStartShouldSetResponder={() => this.handleClick()}>
				<Text style={StyleDices.text}>D12</Text>
			</View>
		)
	}
}

export default D12;
