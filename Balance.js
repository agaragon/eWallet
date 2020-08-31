import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import MonthDropDown from "./MonthDropDown";
import YearDropdown from "./YearDropdown";
import {
  faCashRegister,
  faMoneyBillAlt,
  faPiggyBank,
} from "@fortawesome/free-solid-svg-icons";
import Title from "./Title";

function Balance(props) {
  let titleContent = "Qual mês você gostaria de consultar?";
  return (
    <View style={[styles.mainView, { flexDirection: "column-reverse" }]}>
      <View
        style={{
          width: 150,
          position: "absolute",
          top: 120,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Title content={titleContent} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: 300,
          }}
        >
          <MonthDropDown />
          <YearDropdown />
        </View>
        <TouchableOpacity
          style={[
            styles.btnView,
            { top: 300, position: "absolute", zIndex: -1 },
          ]}
        >
          <Text style={styles.btnText}>Faça sua consulta</Text>
        </TouchableOpacity>
      </View>
      <Navbar user={props.user} />
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
  btnView: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    margin: 10,
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
    flex: 1,
  },
});

export default Balance;
