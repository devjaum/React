import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Modal, KeyboardAvoidingView, Platform} from 'react-native';
import styles from '../css/style';


import hrrsJson from './hrrsJson.json'

import {DropDownList,DropDownProvider} from 'react-native-universal-dropdownlist';


function Fuso() {
    let date = new Date().getHours()+":"+new Date().getMinutes();
    if(Number(date.slice(3,5))<10){
      date = date.slice(0,3)+"0"+date.slice(3,5);
    }
    let [fusoO, setFusoO] = useState('');
    let [fusoD, setFusoD] = useState('');
    let [hora, setHora] = useState(date);
    let [difHora, setDifHora] = useState(date);
    let [convert, setConvert] = useState(0);
    const [open, setOpen] = useState(false);
    const [valueO, setValueO] = useState(null);
    const [valueD, setValueD] = useState(null);

    function fusoHrr(){
      
        if(Number(hora.slice(3))> 59){
          alert(hora+"é invalido!\nOs Minutos vão até 59!");
        }
        else{
          let fusoDif = Number(fusoD)-Number(fusoO);
          let x = String(Number(hora.slice(0,2)) + Number(String(fusoDif).slice(0,2)));
          let horaDif = "";
          if (Number(x)>23){
              x = String(Number(x) - 24);
              horaDif = String(x)+":"+hora.slice(3);
              let min = String(Number(hora.slice(3,5))+Number(String(fusoD).slice(2)));
              if(Number(String(Number(hora.slice(3,5))+Number(String(fusoD).slice(2))))>59){
                x = x + 1;
                min = String(Number(min)-60);
                if(Number(x.slice(0,2))<10){
                  x = "0"+x;
                }
                if(Number(min.slice(0,2))<10){
                  horaDif = String(x)+":"+"0"+min;
                }
                else{
                  horaDif = String(x)+":"+min;
                }
              }
              else{
                if(Number(x.slice(0,2))<10){
                  x = "0"+x;
                }
                if(Number(min.slice(0,2))<10){
                  horaDif = String(x)+":"+"0"+min;
                }
                else{
                  horaDif = String(x)+":"+min;
                }
                
                
              }
              
          }
          else{
              horaDif = String(x)+":"+hora.slice(3);
              let min = String(Number(hora.slice(3,5))+Number(String(fusoD).slice(2)));
              if(Number(String(Number(hora.slice(3,5))+Number(String(fusoD).slice(2))))>59){
                x = x + 1;
                min = String(Number(min)-60);
                if(Number(min.slice(0,2))<10){
                  horaDif = String(x)+":"+"0"+min;
                }
                else{
                  horaDif = String(x)+":"+min;
                }
              }
              else{
                if(Number(min.slice(0,2))<10){
                  horaDif = String(x)+":"+"0"+min;
                }
                else{
                  horaDif = String(x)+":"+min;
                }
               
                
              }
              
              
          }
          setConvert(fusoDif);
          setDifHora(horaDif);
          
      }
  }
    function horaAtual(){
      date = new Date().getHours()+":"+new Date().getMinutes();
      if(Number(date.slice(3,5))<10){
      date = date.slice(0,3)+"0"+date.slice(3,5);
      }
      //setDifHora(date);
      setHora(date);
      fusoHrr();
    }
  return(
    <View style={styles.container}>
      <Text style={styles.text}>      Selecione a origem do fuso</Text>
      <DropDownProvider>
        <View style={styles.dropdown}>
        <DropDownList
          style={styles.dropdownText}
          items={hrrsJson}
          searchAble={true}
          searchPlaceHolder="Pesquise aqui"
          selectedValue={valueO}
          placeHolder="Selecione a cidade"
          onSelect={(item)=>{
            setValueO(item.value);
            setFusoO(item.gmt);
          }}
          dropDownListTextStyle={{textAlign:'left'}}
        />
        </View>
      </DropDownProvider>
      <Text style={styles.text}>      Selecione o destino do fuso</Text>
      <DropDownProvider>
      <View style={styles.dropdown}>
        <DropDownList
          style={styles.dropdownText}
          items={hrrsJson}
          searchAble={true}
          searchPlaceHolder="Pesquise aqui"
          selectedValue={valueD}
          placeHolder="Selecione a cidade"
          onSelect={(item)=>{
            setValueD(item.value);
            setFusoD(item.gmt);
          }}
          dropDownListTextStyle={{textAlign:'left'}}
        />
        </View>
      </DropDownProvider>
      <View>
        <TouchableOpacity style={styles.buttonHrr}
          onPress={horaAtual}
          >
          <Text style={styles.buttonText}>Hora atual</Text>
        </TouchableOpacity>
        <TextInput style={styles.TextInput}
          placeholder={date}
          onChangeText={(texto: string)=>{setHora(texto)}}
        >
          </TextInput>
      </View>
      <TouchableOpacity style={styles.button} onPress={fusoHrr}>
        <Text style={styles.buttonText}>CONVERTER</Text>
        </TouchableOpacity>
      <Text style={styles.text}>{difHora}</Text>
    </View>
  );
}

export default Fuso;

