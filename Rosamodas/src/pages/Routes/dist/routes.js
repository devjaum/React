"use strict";
exports.__esModule = true;
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var stack_1 = require("@react-navigation/stack");
var item_1 = require("../itens/item");
var telaInicial_1 = require("../itens/telaInicial");
var Stack = stack_1.createStackNavigator();
function Routes() {
    return (react_1["default"].createElement(native_1.NavigationContainer, null,
        react_1["default"].createElement(Stack.Navigator, { initialRouteName: "TelaInicial", screenOptions: { headerShown: false } },
            react_1["default"].createElement(Stack.Screen, { name: "Items", component: item_1["default"] }),
            react_1["default"].createElement(Stack.Screen, { name: "TelaInicial", component: telaInicial_1["default"] }))));
}
exports["default"] = Routes;
