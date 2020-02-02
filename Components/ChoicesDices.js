import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import D4 from './Dices/D4'
import D6 from './Dices/D6'
import D10 from './Dices/D10'
import D12 from './Dices/D12'
import D20 from './Dices/D20'
import D100 from './Dices/D100'

class ChoicesDices extends React.Component {

	constructor() {
		super()
		this.typeOfDice = ""
		this.state = {
			typeOfDice : "",
			result: ""
		}
	}

	getTypeOfDiceClicked = (typeOfDice) => {
		
		this.typeOfDice =  typeOfDice
	
		this.findRandomResult();
	}

	findRandomResult() {
		
		let result = Math.floor(Math.random() * Math.floor(this.typeOfDice));

		result++;

		this.setState({
			result: result
		}) 

		if(result === 0) {
			this.findRandomResult();
		}
	}

	render() {

		return(
			<View style={styles.mainContainer}>
				<View style={styles.container}>
					<D4 style={styles.dice} callback={this.getTypeOfDiceClicked} />
					<D6 style={styles.dice} callback={this.getTypeOfDiceClicked} />
					<D10 style={styles.dice} callback={this.getTypeOfDiceClicked} />
					<D12 style={styles.dice} callback={this.getTypeOfDiceClicked} />
					<D20 style={styles.dice} callback={this.getTypeOfDiceClicked} />
					<D100 style={styles.dice} callback={this.getTypeOfDiceClicked} />
				</View>
				<View style={styles.result}>
					<Text style={styles.text}>{this.state.result}</Text>
				</View>
			</View>
		)
	}
}

export default ChoicesDices

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: 'black'
	},
    container: {
        flex: 1,
        backgroundColor: 'black',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    text: {
    	color: 'white',
    	fontSize: 55
    },
    result: {
    	backgroundColor: 'black',
    	alignItems: 'center',
    	justifyContent: 'center',
    	marginBottom: 200
    }
});