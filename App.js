import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, Navigator, View, TextInput } from "react-native";
import Login from "./Login";
import Home from "./Home";
import Navbar from "./Navbar";
import Balance from "./Balance";
import { Link } from "@react-navigation/native";
import MonthDropDown from "./MonthDropDown";
export default function App(props) {
  let user = {
    balance: "200,00",
    name: "André Aragon",
    cpf: "314.159.265-35",
  };
  return (
    <View>
      <Login />
      {/* <Home user={user} /> */}

      {/* <Balance user={user} /> */}
      {/* <Navbar user={user} /> */}
      {/* <Navigator
        initialRoute={{ title: "Awesome Scene", index: 0 }}
        renderScene={(route, navigator) => <Text>Hello {route.title}!</Text>}
      /> */}
      {/* <View>
        <Text>Login</Text>
        <TextInput placeholder="What is your user name?" />
      </View>
      <View>
        <Text>Senha</Text>
        <TextInput placeholder="Write your password here!" />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
