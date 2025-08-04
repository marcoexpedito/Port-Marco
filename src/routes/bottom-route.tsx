import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createBottomTabNavigator();

import Homescreen from '../screens/Homescreen'
import Skillscreen from '../screens/Skillscreen'

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export function BottomTabsRoutes (){
    return (
        <Navigator>
            <Screen name='home'
            component={Homescreen}
            options={{
                title: 'Início',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name='home' color= "black" size={24}
                    />
                )
            }}
        />
        <Screen name='contacts'
        component={Skillscreen}
        options={{
            title: 'Habilidades',
            tabBarIcon: ({}) => (
                <MaterialCommunityIcons name="alpha-h-box" size={24} color="black" 
                />
            )
        }}
        />
        </Navigator>
    )
}