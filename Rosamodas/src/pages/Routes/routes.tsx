import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Modal, ImageBackground } from 'react-native';
import {NavigationAction, NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from '@react-navigation/stack'

import Items from "../itens/item";
import TelaInicial from "../itens/telaInicial";

const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="TelaInicial" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Items" component={Items}/>
                <Stack.Screen name="TelaInicial" component={TelaInicial}/>
            </Stack.Navigator>
            
        </NavigationContainer>
    );
}
export default Routes;