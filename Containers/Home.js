import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Dices from '../Components/Dices';
import Sounds from '../Components/Sounds';
import Maps from '../Components/Maps';
import Lights from '../Components/Lights';
//import Search from './Components/Search';


class Home extends React.Component {

	constructor() {
		super()
	}

	render() {
		return (
			<View style={styles.container}>
				<Dices />
				<Sounds />
				<Maps />
				<Lights />
			</View>
		)
	}
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    }
});