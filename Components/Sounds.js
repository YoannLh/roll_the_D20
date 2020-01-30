import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class Sounds extends React.Component {
    render() { 
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Sons</Text>
            </View>
        );
    }
}

export default Sounds

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

