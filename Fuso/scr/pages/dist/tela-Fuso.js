"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var style_1 = require("../css/style");
var hrrsJson_json_1 = require("./hrrsJson.json");
var react_native_universal_dropdownlist_1 = require("react-native-universal-dropdownlist");
function Fuso() {
    var date = new Date().getHours() + ":" + new Date().getMinutes();
    if (Number(date.slice(3, 5)) < 10) {
        date = date.slice(0, 3) + "0" + date.slice(3, 5);
    }
    var _a = react_1.useState(''), fusoO = _a[0], setFusoO = _a[1];
    var _b = react_1.useState(''), fusoD = _b[0], setFusoD = _b[1];
    var _c = react_1.useState(date), hora = _c[0], setHora = _c[1];
    var _d = react_1.useState(date), difHora = _d[0], setDifHora = _d[1];
    var _e = react_1.useState(0), convert = _e[0], setConvert = _e[1];
    var _f = react_1.useState(false), open = _f[0], setOpen = _f[1];
    var _g = react_1.useState(null), valueO = _g[0], setValueO = _g[1];
    var _h = react_1.useState(null), valueD = _h[0], setValueD = _h[1];
    function fusoHrr() {
        if (Number(hora.slice(3)) > 59) {
            alert(hora + "é invalido!\nOs Minutos vão até 59!");
        }
        else {
            var fusoDif = Number(fusoD) - Number(fusoO);
            var x = String(Number(hora.slice(0, 2)) + Number(String(fusoDif).slice(0, 2)));
            var horaDif = "";
            if (Number(x) > 23) {
                x = String(Number(x) - 24);
                horaDif = String(x) + ":" + hora.slice(3);
                var min = String(Number(hora.slice(3, 5)) + Number(String(fusoD).slice(2)));
                if (Number(String(Number(hora.slice(3, 5)) + Number(String(fusoD).slice(2)))) > 59) {
                    x = x + 1;
                    min = String(Number(min) - 60);
                    if (Number(x.slice(0, 2)) < 10) {
                        x = "0" + x;
                    }
                    if (Number(min.slice(0, 2)) < 10) {
                        horaDif = String(x) + ":" + "0" + min;
                    }
                    else {
                        horaDif = String(x) + ":" + min;
                    }
                }
                else {
                    if (Number(x.slice(0, 2)) < 10) {
                        x = "0" + x;
                    }
                    if (Number(min.slice(0, 2)) < 10) {
                        horaDif = String(x) + ":" + "0" + min;
                    }
                    else {
                        horaDif = String(x) + ":" + min;
                    }
                }
            }
            else {
                horaDif = String(x) + ":" + hora.slice(3);
                var min = String(Number(hora.slice(3, 5)) + Number(String(fusoD).slice(2)));
                if (Number(String(Number(hora.slice(3, 5)) + Number(String(fusoD).slice(2)))) > 59) {
                    x = x + 1;
                    min = String(Number(min) - 60);
                    if (Number(min.slice(0, 2)) < 10) {
                        horaDif = String(x) + ":" + "0" + min;
                    }
                    else {
                        horaDif = String(x) + ":" + min;
                    }
                }
                else {
                    if (Number(min.slice(0, 2)) < 10) {
                        horaDif = String(x) + ":" + "0" + min;
                    }
                    else {
                        horaDif = String(x) + ":" + min;
                    }
                }
            }
            setConvert(fusoDif);
            setDifHora(horaDif);
        }
    }
    function horaAtual() {
        date = new Date().getHours() + ":" + new Date().getMinutes();
        if (Number(date.slice(3, 5)) < 10) {
            date = date.slice(0, 3) + "0" + date.slice(3, 5);
        }
        //setDifHora(date);
        setHora(date);
        fusoHrr();
    }
    return (react_1["default"].createElement(react_native_1.View, { style: style_1["default"].container },
        react_1["default"].createElement(react_native_1.Text, { style: style_1["default"].text }, "      Selecione a origem do fuso"),
        react_1["default"].createElement(react_native_universal_dropdownlist_1.DropDownProvider, null,
            react_1["default"].createElement(react_native_1.View, { style: style_1["default"].dropdown },
                react_1["default"].createElement(react_native_universal_dropdownlist_1.DropDownList, { style: style_1["default"].dropdownText, items: hrrsJson_json_1["default"], searchAble: true, searchPlaceHolder: "Pesquise aqui", selectedValue: valueO, placeHolder: "Selecione a cidade", onSelect: function (item) {
                        setValueO(item.value);
                        setFusoO(item.gmt);
                    }, dropDownListTextStyle: { textAlign: 'left' } }))),
        react_1["default"].createElement(react_native_1.Text, { style: style_1["default"].text }, "      Selecione o destino do fuso"),
        react_1["default"].createElement(react_native_universal_dropdownlist_1.DropDownProvider, null,
            react_1["default"].createElement(react_native_1.View, { style: style_1["default"].dropdown },
                react_1["default"].createElement(react_native_universal_dropdownlist_1.DropDownList, { style: style_1["default"].dropdownText, items: hrrsJson_json_1["default"], searchAble: true, searchPlaceHolder: "Pesquise aqui", selectedValue: valueD, placeHolder: "Selecione a cidade", onSelect: function (item) {
                        setValueD(item.value);
                        setFusoD(item.gmt);
                    }, dropDownListTextStyle: { textAlign: 'left' } }))),
        react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: style_1["default"].buttonHrr, onPress: horaAtual },
                react_1["default"].createElement(react_native_1.Text, { style: style_1["default"].buttonText }, "Hora atual")),
            react_1["default"].createElement(react_native_1.TextInput, { style: style_1["default"].TextInput, placeholder: date, onChangeText: function (texto) { setHora(texto); } })),
        react_1["default"].createElement(react_native_1.TouchableOpacity, { style: style_1["default"].button, onPress: fusoHrr },
            react_1["default"].createElement(react_native_1.Text, { style: style_1["default"].buttonText }, "CONVERTER")),
        react_1["default"].createElement(react_native_1.Text, { style: style_1["default"].text }, difHora)));
}
exports["default"] = Fuso;
