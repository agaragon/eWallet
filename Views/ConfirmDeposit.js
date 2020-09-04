import React from "react";
import { connect } from "react-redux";
import Navbar from "../Components/Navbar";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

function ConfirmDeposit(props) {
  return (
    <View style={styles.mainView}>
      <Text style={styles.text}>
        Você realmente quer fazer um depósito no valor de R${" "}
        {props.amount.toFixed(2).replace(".", ",")}
      </Text>
      <TouchableOpacity
        style={styles.btnView}
        onPress={() => {
          console.log(`ConfirmDeposit ${props.amount}`);
          props.dispatch({
            type: "SAGA_MAKE_DEPOSIT",
            amount: parseFloat(props.amount),
            account: props.user.toAccount,
            agency: props.user.toAgency,
            date: new Date(),
          });
          props.navigation.navigate("Home");
        }}
      >
        <Text style={styles.btnText}>Sim</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnView}
        onPress={() => {
          props.navigation.navigate("Home");
        }}
      >
        <Text style={styles.btnText}>Não gerar boleto</Text>
      </TouchableOpacity>
      <Navbar user={props.user} navigation={props.navigation} />
    </View>
  );
}

let primaryColor = "#173f5f";
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: primaryColor,
    textAlign: "center",
  },
  title: {
    color: primaryColor,
    fontSize: 35,
    textAlign: "center",
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
    fontSize: 25,
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
    amount: state.amount,
  };
};
export default connect(mapStateToProps)(ConfirmDeposit);
