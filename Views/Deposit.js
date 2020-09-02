import React, { useState } from "react";
import { connect } from "react-redux";
import Navbar from "../Components/Navbar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

function Deposit(props) {
  const [depositValue, changeDepositValue] = useState(0);

  return (
    <View style={styles.mainView}>
      <Text style={[styles.title, { marginBottom: 35 }]}>Faça um depósito</Text>

      <View style={styles.textView}>
        <Text style={[styles.text, { width: 120 }]}>Valor do depósito</Text>

        <TextInput
          style={[
            styles.inputField,
            { width: 90, marginRight: 70, fontSize: 25 },
          ]}
          onChangeText={(text) => {
            text = parseFloat(
              text.replace("R$", "").replace(".", "").replace(",", ".")
            );
            changeDepositValue(text);
            props.dispatch({
              type: "CHANGE_DEPOSIT_VALUE",
              amount: text,
            });
          }}
        />
      </View>

      <Text style={styles.text}>
        O valor da depósito é R$ {depositValue.toFixed(2).replace(".", ",")}
      </Text>
      <View style={{ marginTop: 20 }}></View>

      <TouchableOpacity
        style={styles.btnView}
        onPress={() => {
          props.navigation.navigate("ConfirmDeposit");
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
    deposit: state.user,
  };
};
export default connect(mapStateToProps)(Deposit);
