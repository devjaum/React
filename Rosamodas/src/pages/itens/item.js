import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, FlatList, Image, Modal, ImageBackground} from 'react-native';
import item from "../../json/item.json"
import {Icon} from "react-native-elements"

//Importar useNavigation da biblioteca react-navigation/native
import {useNavigation} from "@react-navigation/native";
//CSS
import css from '../css/css';


function Items({route}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [imagem, setImagem] = useState();
  const navigation = useNavigation();
    function voltar(){
        navigation.navigate("TelaInicial");
    }
  function renderItem({item}){
    if(item.Nome.indexOf(route.params.categoria) != -1){
      return(
        
        <View style={css.flat}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
              setImagem(item.Imagem);
            }}
          >
          <Image source={{uri: item.Imagem}} style={css.img}
          />
          </TouchableOpacity>
            <View style={css.txt}>
              <Text>{item.Nome}</Text>
              <Text>R$ {item.preco} </Text>
            </View>
        </View>
        
        );
      
    }
    
  }

  return (
    <>
    
    <TouchableOpacity onPress={voltar} style={css.bottomLogin}>
      <Text>Voltar</Text>
    </TouchableOpacity>
    
    <View style={css.container}>
      <StatusBar/>
      <View style={css.cont1}>
      <FlatList
        keyExtractor={(index)=>index.id}
        numColumns={1}
        data={item}
        renderItem={renderItem}
      />
      </View>
      <View style={{justifyContent:'center', alignContent:'center', alignItems:'center'}}>
      <Modal
            animationType="slide"
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <TouchableOpacity 
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
              style={css.sairImagem}
            >
              <Icon
                    name="close"
                    type="ant-design"
                    color="#000"
                    size={20}
                    tvParallaxProperties={
                        {
                            enabled: true,
                            intensity: 1,
                        }
                    }
                    style={{paddingLeft:10, marginBottom:10}}
                />
            </TouchableOpacity>
            <Image source={{uri: imagem}} style={css.imagem} ></Image>
          </Modal>
          </View>
    </View>
    </>
  );
}

export default Items;

