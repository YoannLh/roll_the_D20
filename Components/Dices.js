import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class Dices extends React.Component {

    constructor() {
        super()
    }

    handlePress() {
        console.log("Press")
        this.props.navigation.navigate("ChoicesDices")
    }

    render() { 
        return (
    	    <View style={styles.container} onStartShouldSetResponder={() => this.handlePress()} >
    	        <Text style={styles.text}>Dés</Text>
    	    </View>
        );
    }
}

export default Dices;

const styles = StyleSheet.create({
    container: {
    	borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'white',
    	borderRadius: 4,
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white'
    }
});

