import React from 'react';
import { View, StyleSheet } from 'react-native';
import Navigation from './Navigation/Navigation';
import ChoicesDices from './Containers/ChoicesDices'

class App extends React.Component {

    constructor() {
        super()
    }

    render() { 
        return (
            <View style={styles.container}>
                <Navigation /> 
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


