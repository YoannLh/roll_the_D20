import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class Lights extends React.Component {

    constructor() {
        super()
    }

    handlePress() {
        console.log("Press")
    }
    
    render() { 
        return (
            <View style={styles.container} onStartShouldSetResponder={() => this.handlePress()} >
                <Text style={styles.text}>Lumière</Text>
            </View>
        );
    }
}

export default Lights

const styles = StyleSheet.create({
    container: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'white',
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white'
    }
});

