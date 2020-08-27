import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import MonthDropDown from "./MonthDropDown";
import {
  faCashRegister,
  faMoneyBillAlt,
  faPiggyBank,
} from "@fortawesome/free-solid-svg-icons";
import Title from "./Title";

function Balance(props) {
  let titleContent = "Qual mês você gostaria de consultar?";
  return (
    <View style={styles.mainView}>
      <Navbar user={props.user} />

      <View style={{ width: 150, position: "fixed", top: 90 }}>
        <Title content={titleContent} />
        <MonthDropDown />
      </View>
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
  },
  text: {
    fontSize: 20,
    color: primaryColor,
  },

  mainView: {
    backgroundColor: "#3689b2",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
});

export default Balance;
