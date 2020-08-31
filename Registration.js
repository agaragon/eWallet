import React from "react";
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

function Login() {
  return (
    <View style={styles.mainView}>
      <Image
        style={styles.serasaLogo}
        source={require("./assets/serasa-logo.jpg")}
      />
      <Text style={styles.title}>
        Um código foi enviado ao seu celular, por favor insira o seu valor
        abaixo
      </Text>
      <View style={{ flexDirection: "row" }}>
        <View>
          <TextInput style={styles.number} />

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
          <TextInput style={styles.number} />

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
          <TextInput style={styles.number} />

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
          <TextInput style={styles.number} />

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
        onPress={() => props.navigation.navigate("Login")}
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

export default Login;
