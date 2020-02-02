// Navigation/Navigation.js

import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../Containers/Home'
import ChoicesDices from '../Components/ChoicesDices'

const AppStackNavigator = createStackNavigator({

	
	Auberge: {
		screen: Home
	},
	Dés: {
		screen: ChoicesDices
	},
})

export default createAppContainer(AppStackNavigator);