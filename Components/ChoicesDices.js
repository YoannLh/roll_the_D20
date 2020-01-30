import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class ChoicesDices extends React.Component {

	constructor() {
		super()
	}

	render() {

		return(
			<View style={styles.container}>
				<View><Text style={styles.text}>D4</Text></View>
				<View><Text style={styles.text}>D6</Text></View>
				<View><Text style={styles.text}>D10</Text></View>
				<View><Text style={styles.text}>D12</Text></View>
				<View><Text style={styles.text}>D20</Text></View>
				<View><Text style={styles.text}>D100</Text></View>
			</View>
		)
	}
}

export default ChoicesDices

const styles = StyleSheet.create({
    container: {
    	borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'white',
    	borderRadius: 4,
        flex: 1,
        flexWrap: 'wrap-reverse',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        backgroundColor: 'red'
    }
});