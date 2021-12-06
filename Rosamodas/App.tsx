import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Routes from './src/pages/Routes/routes';
import Items from './src/pages/itens/item';
import item from "./src/json/item.json";

export default function App() {
  return (
    <>
    <StatusBar 
    backgroundColor="transparent"
    hidden={true}
    />
    <Routes/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
