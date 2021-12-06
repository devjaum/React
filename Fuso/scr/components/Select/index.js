import React, {useState} from "react";
import {View, TouchableOpacity, Text, Modal, FlatList, StyleSheet,Dimensions,SafeAreaView} from 'react-native'
const {width} = Dimensions.get("window"); 


function Select ({options, onChangeSelect, text}){
    const [txt, setTxt] = useState(text);
    const [modalVisible, setModalVisible]=useState(false);
    
    function renderOption(item){
        return(
            <TouchableOpacity style={styles.optionContent}
                onPress={()=>{
                    onChangeSelect(item.value)
                    setTxt(item.label+" - GMT "+String(item.value))
                    setModalVisible(false)
                }}
            >
            <Text style={styles.optionTxt}>{item.label} - GMT({item.value})</Text>
            </TouchableOpacity>
        )
    }

    return <View>
        <TouchableOpacity style={styles.container} onPress={()=>setModalVisible(true)}>
        <Text style={styles.Text}numberOfLines={1}>{txt}</Text>
        </TouchableOpacity>
        <Modal animationType="slide" visible={modalVisible} onRequestClose={()=>setModalVisible(false)}>
            <SafeAreaView>
            <View style={styles.headerModal}>
                <Text style={styles.modalTitle}>{txt}</Text>
                <TouchableOpacity onPress={()=>{
                    setModalVisible(false);
                    }}>
                    <Text style={styles.modalCancel}>Cancelar</Text>
                </TouchableOpacity>
                </View>    
            </SafeAreaView>
        <FlatList
            data={options}
            keyExtractor={(item)=>String(item.label)}
            renderItem={({item})=>renderOption(item)}
            initialNumToRender={10}
        />
        </Modal>
    </View>;
};

export default Select;

const styles=StyleSheet.create({
    container:{
        height: 50,
        backgroundColor: 'white',
        paddingHorizontal: 12,
        marginHorizontal:20,
        borderRadius:8,
        fontSize:18,
        borderColor:'#c0c0c0',
        borderWidth: 1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginTop:15,
    },
    Text:{
        color: 'black',
        fontSize: 16,
        width: width - 90,
    },
    headerModal:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        paddingHorizontal:12,
        borderBottomColor:'black',
        backgroundColor: '#e9e9fd',
        borderBottomWidth:1,
        paddingBottom: 12,
    },
    modalTitle:{
        fontSize: 18,
        color:'gray',   
    },
    modalCancel:{
        fontSize: 14,
        color:'red', 
        fontWeight:'bold',  
    },
    optionContent:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        borderBottomColor:"#808080",
        borderBottomWidth:1,
        padding:10,
        backgroundColor:"#e9e9fd"
    },
    optionTxt:{
        fontSize: 18,
        color:'#5d9b9b', 
    },
})

