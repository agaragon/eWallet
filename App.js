import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, Navigator, View, TextInput } from "react-native";

import { Link } from "@react-navigation/native";

export default function App() {
  return (
    <View>
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
