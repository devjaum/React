"use strict";
exports.__esModule = true;
var expo_status_bar_1 = require("expo-status-bar");
var react_1 = require("react");
var react_native_elements_1 = require("react-native-elements");
var react_native_1 = require("react-native");
//Importar useNavigation da biblioteca react-navigation/native
var native_1 = require("@react-navigation/native");
var css_1 = require("../css/css");
//Importando subTelaInicial
var subTelaInicial_1 = require("./subTelaInicial");
function TelaInicial() {
    var _a = react_1.useState(false), modal = _a[0], setModal = _a[1];
    var navigation = native_1.useNavigation();
    function render() {
        setModal(!modal);
    }
    function camisas() {
        navigation.navigate("Items", { categoria: "Camisa" });
    }
    function calça() {
        navigation.navigate("Items", { categoria: "Calça" });
    }
    return (react_1["default"].createElement(react_native_1.ScrollView, null,
        react_1["default"].createElement(react_native_1.View, { style: { flex: 1 } },
            react_1["default"].createElement(react_native_1.View, { style: { backgroundColor: '#ffe8f8' } },
                react_1["default"].createElement(expo_status_bar_1.StatusBar, null),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return render(); }, style: { marginTop: 20, width: "35%", backgroundColor: "#ffe8f8", alignItems: 'baseline' } },
                    react_1["default"].createElement(react_native_elements_1.Icon, { name: "bars", type: "ant-design", color: "#000", size: 20, tvParallaxProperties: {
                            enabled: true,
                            shiftDistanceX: 10,
                            shiftDistanceY: 0,
                            magnitude: 2
                        }, style: { paddingLeft: 10, marginBottom: 10 } })),
                react_1["default"].createElement(react_native_1.Modal, { animationType: "fade", transparent: true, visible: modal },
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return setModal(!modal); }, style: { marginTop: 20, width: "35%", zIndex: 1, backgroundColor: "#ffe8f8", alignItems: 'baseline' } },
                        react_1["default"].createElement(react_native_elements_1.Icon, { name: "close", type: "ant-design", color: "#000", size: 20, tvParallaxProperties: {
                                enabled: true,
                                intensity: 1
                            }, style: { paddingLeft: 10, marginBottom: 10 } })),
                    react_1["default"].createElement(react_native_1.View, { style: { backgroundColor: 'rgba(232, 232, 232, 0.4)', flexDirection: 'column', height: "100%" } },
                        react_1["default"].createElement(react_native_1.View, { style: { backgroundColor: 'rgba(255,232,248, 0.8)', height: "100%", width: "35%" } },
                            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { camisas(); setModal(!modal); }, style: css_1["default"].menu },
                                react_1["default"].createElement(react_native_1.Text, null, "Camisas")),
                            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { calça(); setModal(!modal); }, style: css_1["default"].menu },
                                react_1["default"].createElement(react_native_1.Text, null, "Cal\u00E7a")))))),
            react_1["default"].createElement(subTelaInicial_1["default"], null))));
}
exports["default"] = TelaInicial;
