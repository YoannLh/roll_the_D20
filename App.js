import React from 'react';
import { View, StyleSheet } from 'react-native';
import Navigation from './Navigation/Navigation';
import ChoicesDices from './Components/ChoicesDices'

class App extends React.Component {

    constructor() {
        super()
    }

    render() { 
        return (
            <View style={styles.container}>
                <ChoicesDices /> 
            </View>
        );
    }
}

export default App;

const styles = StyleSheet.create({
    container : {
        flex: 1
    }
})


