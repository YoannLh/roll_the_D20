import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

class Search extends React.Component {
	
	handleChange(text) {

		console.log(text)
	}
	render() {

		return <TextInput style={styles.input} placeholder="loulou" onChangeText={(text) => this.handleChange(text)}/>
	}
}

export default Search

const styles = StyleSheet.create({
    input: {
    	borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'white',
    	borderRadius: 4,
        flex: 1,
        backgroundColor: 'black',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }
});