import React, { useState } from "react";
import { connect } from "react-redux";
import Navbar from "../Components/Navbar";
import TouchableButton from "../Components/TouchableButton";
import Title from "../Components/Title";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";

function Payments(props) {
  const [firstInput, changeFirstInput] = useState("");
  const [secondInput, changeSecondInput] = useState("");

  const accessBill = () => {
    props.dispatch({
      type: "SAGA_ACCESS_BILL",
      codeBar: firstInput + secondInput,
    });
    props.navigation.navigate("Bill");
  };
  const accessBillText = "Acesse o seu boleto";

  const goToHomeText = "Retorne ao menu principal";
  const goToHome = () => props.navigation.navigate("Home");
  return (
    <View
      // contentContainerStyle={{ alignItems: "center", justifyContent: "center" }}
      style={styles.mainView}
    >
      <Title style={{ fontSize: 35 }} content={"Faça um pagamento"}></Title>
      <View style={styles.textView}>
        <Text style={styles.text}>Entre com o código de barras</Text>
        <TextInput
          style={styles.inputField}
          selectTextOnFocus={false}
          onChangeText={(text) => {
            changeFirstInput(text);
          }}
        />
        <TextInput
          style={styles.inputField}
          selectTextOnFocus={false}
          onChangeText={(text) => {
            changeSecondInput(text);
          }}
        />
      </View>
      <TouchableButton width={250} onPress={accessBill} text={accessBillText} />
      <TouchableButton width={250} onPress={goToHome} text={goToHomeText} />

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
  inputField: {
    margin: 10,
    color: "black",
    backgroundColor: "white",
    borderRadius: 3,
    padding: 3,
    width: 300,
    fontSize: 25,
  },
  text: {
    fontSize: 20,
    color: primaryColor,
    textAlign: "center",
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
export default connect(mapStateToProps)(Payments);
