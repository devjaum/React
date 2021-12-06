import React,{useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Modal } from "react-native";
import {Icon} from "react-native-elements"

import { useNavigation } from "@react-navigation/native";

import css from "../css/css";
//Importando o json
import item from "../../json/item.json"
function SubTela(){
    const [imagem, setImagem] = useState();
    const [modalVisible, setModalVisible] = useState(false);
    function renderItem({item}){
        return(
            <View style={css.flatSubtela}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                  setImagem(item.Imagem);
                }}
              >
              <Image source={{uri: item.Imagem}} style={css.imgSubTela}
              />
              </TouchableOpacity>
            </View>
            );
    }

    return(
        <View style={css.containerSubTela}>
            <View style={css.subTela}>
                <View style={css.subTela2}>
                    <FlatList
                        keyExtractor={(index)=>index.id}
                        horizontal={true}
                        data={item}
                        renderItem={renderItem}
                    ></FlatList>
                </View>
            </View>
            <View style={{justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                <Modal
                    animationType="slide"
                    visible={modalVisible}
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
    )
}
export default SubTela;