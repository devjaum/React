import React from "react";
import {StyleSheet} from "react-native";
import { Dimensions } from "react-native";

const widht = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const css=StyleSheet.create({
    containerLogin:{
        flex:1,
        justifyContent: 'flex-start',
    },
    bottomLogin:{
        padding: 16,
        paddingHorizontal: 20,
        backgroundColor: '#ffe8f8',
        borderWidth: 0.4,
        borderColor: '#ffd9e9',
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 8,
      },
      cont1: {
        flex:1,
        paddingLeft: "5%",
        paddingTop: 0,
        flexDirection: 'row',
        borderWidth: 0,
      },
      flat:{
        paddingLeft: "5%",
        paddingTop: 40,
        flexDirection: 'row',
        borderWidth: 0,
      },
      img: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        paddingLeft: -50,
        width: 150,
        height: 250,
        backgroundColor: 'white',
        borderColor: '#ffd9e9'
      },
      txt: {
        paddingLeft: 13,
        justifyContent: 'center'
      },
      imagem:{
        width: "100%",
        height: "100%"
      },
      menu:{
        padding: 16,
        paddingHorizontal: 20,
        backgroundColor: 'rgba(255,232,248, 0.8)',
        borderWidth: 0.4,
        borderColor: '#ffd9e9',
        width: "100%",
    },
    sairImagem:{
      padding:10,
      paddingHorizontal: 20,
      backgroundColor: '#ffe8f8',
      borderWidth: 0.4,
      borderColor: '#ffd9e9',
      flexDirection: 'row-reverse'
  },
    containerSubTela:{
        width: widht,
        height: height,
        justifyContent: 'flex-start',
    },
    subTela:{
      width: "100%",
      height: "60%",
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    subTela2:{
      backgroundColor: 'rgba(255,232,248, 0.3)',
      height: "90%",
      width: "90%",
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    flatSubtela:{
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      width: widht - 5,
    },
    imgSubTela:{
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      width: widht -40,
      height: height -450,
      backgroundColor: 'white',
      borderColor: '#ffd9e9',
    },
});

export default css;
