"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_native_2 = require("react-native");
var widht = react_native_2.Dimensions.get("window").width;
var height = react_native_2.Dimensions.get("window").height;
var css = react_native_1.StyleSheet.create({
    containerLogin: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    bottomLogin: {
        padding: 16,
        paddingHorizontal: 20,
        backgroundColor: '#ffe8f8',
        borderWidth: 0.4,
        borderColor: '#ffd9e9'
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 8
    },
    cont1: {
        flex: 1,
        paddingLeft: "5%",
        paddingTop: 0,
        flexDirection: 'row',
        borderWidth: 0
    },
    flat: {
        paddingLeft: "5%",
        paddingTop: 40,
        flexDirection: 'row',
        borderWidth: 0
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
    imagem: {
        width: "100%",
        height: "100%"
    },
    menu: {
        padding: 16,
        paddingHorizontal: 20,
        backgroundColor: 'rgba(255,232,248, 0.8)',
        borderWidth: 0.4,
        borderColor: '#ffd9e9',
        width: "100%"
    },
    sairImagem: {
        padding: 10,
        paddingHorizontal: 20,
        backgroundColor: '#ffe8f8',
        borderWidth: 0.4,
        borderColor: '#ffd9e9',
        flexDirection: 'row-reverse'
    },
    containerSubTela: {
        width: widht,
        height: height,
        justifyContent: 'flex-start'
    },
    subTela: {
        width: "100%",
        height: "60%",
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    subTela2: {
        backgroundColor: 'rgba(255,232,248, 0.3)',
        height: "90%",
        width: "90%",
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    flatSubtela: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: widht - 5
    },
    imgSubTela: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        width: widht - 40,
        height: height - 450,
        backgroundColor: 'white',
        borderColor: '#ffd9e9'
    }
});
exports["default"] = css;
