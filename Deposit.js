import React, { useState } from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import { TextInputMask } from "react-native-masked-text";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

function Deposit(props) {
  const [transferValue, changeTransferValue] = useState(0);

  return (
    <View style={styles.mainView}>
      <Text style={[styles.title, { marginBottom: 35 }]}>Faça um depósito</Text>

      <View style={styles.textView}>
        <Text style={[styles.text, { width: 120 }]}>Valor do depósito</Text>
        <TextInputMask
          style={[
            styles.inputField,
            { width: 200, marginRight: 70, fontSize: 25 },
          ]}
          type={"money"}
          value={transferValue}
          onChangeText={(text) => {
            text = text.replace("R$", "").replace(".", "").replace(",", ".");
            changeTransferValue(text);
          }}
        />
      </View>
      <View style={{ marginTop: 20 }}></View>

      <TouchableOpacity
        style={styles.btnView}
        onPress={() => {
          props.dispatch({ type: "GENERATE_BILL", amount: transferValue });
          props.navigation.navigate("Home");
        }}
      >
        <Text style={styles.btnText}>Gere um boleto para depósito</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnView}
        onPress={() => {
          props.navigation.navigate("Home");
        }}
      >
        <Text style={styles.btnText}>Retorne ao menu principal</Text>
      </TouchableOpacity>
      <Navbar user={props.user} navigation={props.navigation} />
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
  textView: { flexDirection: "row" },
  dateTimePicker: { marginTop: 30 },
  inputField: {
    margin: 10,
    color: "black",
    backgroundColor: "white",
    borderRadius: 3,
    padding: 3,
    width: 300,
  },
  text: {
    fontSize: 20,
    color: primaryColor,
    textAlign: "center",
  },
  title: {
    color: primaryColor,
    fontSize: 35,
    textAlign: "center",
    marginBottom: 20,
  },
  btnView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    margin: 10,
    width: 270,
    height: 50,
    backgroundColor: "#3caea3",
    padding: 0,
  },
  btnText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "600",
    color: "#c3f2fc",
    marginRight: 20,
  },

  mainView: {
    backgroundColor: "#3689b2",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
});

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(Deposit);
