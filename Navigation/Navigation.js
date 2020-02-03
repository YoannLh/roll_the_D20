// Navigation/Navigation.js

import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../Containers/Home'
import ChoicesDices from '../Containers/ChoicesDices'
import StoreAndPlaySounds from '../Containers/StoreAndPlaySounds'
import StoreAndModifyMaps from '../Containers/StoreAndModifyMaps'
import Lights from '../Components/Lights'


const AppStackNavigator = createStackNavigator(
	{
    Auberge: Home,
    Dés: ChoicesDices,
    Sons: StoreAndPlaySounds,
    Cartes: StoreAndModifyMaps,
    Effets: Lights
  },
  {
    initialRouteName: 'Auberge',
  }
)

export default createAppContainer(AppStackNavigator);