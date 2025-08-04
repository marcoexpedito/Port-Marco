import { NavigationContainer } from '@react-navigation/native'

import { BottomTabsRoutes } from './bottom-route'

export function Routes(){
    return (
        <NavigationContainer>
            <BottomTabsRoutes/>
        </NavigationContainer>
    )
}