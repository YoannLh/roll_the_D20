import React from 'react';
import { View, StyleSheet } from 'react-native';
import Search from './Components/Search';
import Dices from './Components/Dices';
import Sounds from './Components/Sounds';
import Maps from './Components/Maps';
import Lights from './Components/Lights';

class App extends React.Component {

    constructor() {
        super()
    }

    render() { 
        return (
            <View style={styles.container}>
                <Search />
                <Dices />
                <Sounds />
                <Maps />
                <Lights />
            </View>
        );
    }
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    }
});
