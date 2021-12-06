import React from "react";

import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";

//Instalar pelo comando expo install react-native-gesture-handler
import { RectButton } from 'react-native-gesture-handler';

//Importar o icone
import { Feather as Icon } from '@expo/vector-icons';

//importar useNavigation da lib react-navigation/native
import { useNavigation } from '@react-navigation/native';


const Home = () => {

    //2° Passo - Criar o navigation
    const navigation = useNavigation();

    //Função que navega para a tela de points
    function navegaParaPoints(){
        navigation.navigate("Points");
    }


    return (
        <ImageBackground source={require('../../assets/home-background.png')}
            imageStyle={{ width: 274, height: 368 }}
            style={styles.container}>

            <View style={styles.main}>
                <Image source={require('../../assets/logo.png')} />
                <Text style={styles.title}>Seu Marketplace de coleta de residuos</Text>
                <Text style={styles.descritpion}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente!</Text>
            </View>

            <View style={styles.footer}>
                <RectButton style={styles.button} onPress={navegaParaPoints}>
                    <View style={styles.buttonIcon}>
                        <Icon name="arrow-right" size={24} color="#FFF" />
                    </View>

                    <Text style={styles.buttonText}>Entrar</Text>
                </RectButton>
            </View>


        </ImageBackground>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        backgroundColor: '#F0F0F5'
    },

    main: {
        flex: 1,
        justifyContent: 'center'
    },

    title: {
        color: '#322153',
        fontSize: 32,
        maxWidth: 260,
        marginTop: 64,
        fontFamily: 'Ubuntu_700Bold',
    },

    descritpion: {
        color: '#6C6C80',
        fontSize: 16,
        marginTop: 16,
        maxWidth: 260,
        lineHeight: 24,
        fontFamily: 'Roboto_400Regular',
    },

    footer: {

    },

    button: {
        flexDirection: 'row',
        backgroundColor: '#34CB79',
        height: 60,
        borderRadius: 10,
        alignItems: 'center',
        overflow: 'hidden',
        marginTop: 10
    },

    buttonIcon: {
        height: 60,
        width: 60,
        backgroundColor: '#2FB66D',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Roboto_500Medium',

    }

});