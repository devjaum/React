
import React from 'react';

import { StyleSheet, Text, View, StatusBar } from 'react-native';

//importar o componente de Home
import Home from './src/pages/Home';

//importar a tela de Points
import Points from "./src/pages/Points";

//import do Apploading
import AppLoading from 'expo-app-loading';

//importando fontes do google fonts
import {Ubuntu_700Bold, useFonts} from '@expo-google-fonts/ubuntu';
import {Roboto_400Regular, Roboto_500Medium} from '@expo-google-fonts/roboto';

//importar o componente de Routes
import Routes from "./src/routes";


export default function App() {

  const [fontLoads] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold
  });

  if(!fontLoads){
    //Mostre o loading
    return <AppLoading/>
  }

 else{
    return (
      <>
        <StatusBar backgroundColor="transparent" barStyle="dark-content"/>
        <Routes/>     
      </>
    );

    
 }//fecha o else
}//fecha o componente app

