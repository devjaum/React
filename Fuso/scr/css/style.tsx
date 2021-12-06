import { Text, View, StyleSheet, TextInput, TouchableOpacity, Modal } from 'react-native';

const styles=StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'white'
    },
    TextInput:{
      width: 300,
      marginTop: 10,
      marginBottom: 10,
      padding: 5,
      fontSize: 15,
      borderBottomColor: '#84b077',
      borderBottomWidth: 2,
      color:'#84b077'
    },
    button:{
      width: 110,
      height: 45,
      borderWidth:10,
      borderRadius:20,
      borderTopLeftRadius:5,
      backgroundColor:"#1f23",
      borderColor:"#1f23",
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:40,
      marginBottom: 25,
      //borderBottomColor:"#1f23"
    },
    buttonText:{
      fontSize: 13,
      color: '#6aa762',
      fontWeight: 'bold',
    },
    text:{
      alignContent:'center',
      
      fontSize: 13,
      fontWeight: 'bold',
      marginTop:5,
      color:"#84b077"
    },
    buttonHrr:{
      width: "30%",
      height: 45,
      borderWidth:10,
      borderRadius:20,
      backgroundColor:"#1f23",
      borderColor:"#1f23",
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      marginBottom: 5,
      borderTopLeftRadius:5,

    },
    dropdown:{
      width:"20%",
      alignItems:'center',
      alignContent:'center',
      backgroundColor:'white',
    },
    dropdownText:{
      width: "100%",
      marginTop: 10,
      marginBottom: 10,
      fontSize: 15,
      color:'#84b077'
    },
  });

export default styles;