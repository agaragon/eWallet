import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, Navigator, View, TextInput } from "react-native";
import Login from "./Login";
import Home from "./Home";
import Navbar from "./Navbar";
import Payments from "./Payments";
import Balance from "./Balance";
import { Link } from "@react-navigation/native";
import MonthDropDown from "./MonthDropDown";
export default function App(props) {
  let user = {
    balance: "200,00",
    name: "André Aragon",
    cpf: "314.159.265-35",
  };
  return <Payments user={user} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
