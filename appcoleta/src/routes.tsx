import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//importar as telas (componentes)
import Home   from "./pages/Home";
import Points from "./pages/Points";
import Detail from "./pages/Details";

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
                <Stack.Screen name="Home"   component={Home}/>
                <Stack.Screen name="Points" component={Points}/>
                <Stack.Screen name="Detail" component={Detail}/>
            </Stack.Navigator>
        </NavigationContainer>
    );

}

export default Routes;