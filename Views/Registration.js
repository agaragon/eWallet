import React, { useState } from "react";
import { connect } from "react-redux";
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

function Registration(props) {
  let [digit1, changeDigit1] = useState(null);
  let [digit2, changeDigit2] = useState(null);
  let [digit3, changeDigit3] = useState(null);
  let [digit4, changeDigit4] = useState(null);
  let combination;
  let textInput1;
  let textInput2;
  let textInput3;
  let textInput4;
  return (
    <View style={styles.mainView}>
      <Image
        style={styles.serasaLogo}
        source={require("../assets/serasa-logo.png")}
      />
      <Text style={styles.title}>
        Um código foi enviado ao seu celular, por favor insira o seu valor
        abaixo
      </Text>
      <View style={{ flexDirection: "row" }}>
        <View>
          <TextInput
            style={styles.number}
            ref={(input) => {
              textInput1 = input;
            }}
            onChange={() => {
              textInput2.focus();
            }}
            onChangeText={(text) => {
              changeDigit1(text);
            }}
          />

          <View
            style={{
              height: 1,
              width: 30,
              backgroundColor: "#ccc",
              marginTop: 10,
            }}
          ></View>
        </View>
        <View>
          <TextInput
            style={styles.number}
            ref={(input) => {
              textInput2 = input;
            }}
            onChange={() => textInput3.focus()}
            onChangeText={(text) => {
              changeDigit2(text);
            }}
          />

          <View
            style={{
              height: 1,
              width: 30,
              backgroundColor: "#ccc",
              marginTop: 10,
            }}
          ></View>
        </View>
        <View>
          <TextInput
            style={styles.number}
            ref={(input) => {
              textInput3 = input;
            }}
            onChange={() => textInput4.focus()}
            onChangeText={(text) => {
              changeDigit3(text);
            }}
          />

          <View
            style={{
              height: 1,
              width: 30,
              backgroundColor: "#ccc",
              marginTop: 10,
            }}
          ></View>
        </View>
        <View>
          <TextInput
            style={styles.number}
            ref={(input) => {
              textInput4 = input;
            }}
            onChangeText={(text) => {
              changeDigit4(text);
            }}
          />

          <View
            style={{
              height: 1,
              width: 30,
              backgroundColor: "#ccc",
              marginTop: 10,
            }}
          ></View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.btnView}
        onPress={() => {
          combination = digit1 + digit2 + digit3 + digit4;
          props.dispatch({ type: "CHECK_SMS", input: combination });
          props.navigation.navigate("Login");
        }}
      >
        <Text style={styles.btnText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}
let primaryColor = "#173f5f";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  number: {
    marginRight: 10,
    height: 40,
    width: 30,
    backgroundColor: "#fff",
    fontSize: 25,
    textAlign: "center",
  },

  inputField: {
    height: 30,
    color: "black",
    backgroundColor: "#cccccc",
    borderRadius: 3,
    padding: 3,
  },

  title: {
    color: primaryColor,
    fontSize: 25,
    textAlign: "center",
    marginTop: -5,
    marginBottom: 20,
  },

  btnView: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginTop: 10,
    width: 170,
    height: 50,
    backgroundColor: "#3caea3",
    padding: 0,
  },
  btnText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "600",
    color: "#c3f2fc",
  },
  mainView: {
    backgroundColor: "#3689b2",
    alignItems: "center",
    flex: 1,
    paddingTop: 100,
  },

  serasaLogo: {
    margin: -100,
    marginBottom: -40,
    width: 260,
    height: 260,
    resizeMode: "contain",
  },
});

export default connect()(Registration);
