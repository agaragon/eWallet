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
      <Image source={require("@expo/snack-static/react-native-logo.png")} />
      <View>
        <Text style={styles.text}>Coloque seu Login</Text>
        <TextInput />
      </View>
      <View>
        <Text style={styles.text}>Coloque sua senha</Text>
        <TextInput secureTextEntry={true} />
      </View>
      <TouchableOpacity style={styles.btnView}>
        <Text style={styles.btnText}>Accesse sua conta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnView}>
        <Text style={styles.btnText}>Registre-se com o seu telefone</Text>
      </TouchableOpacity>
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
  text: {
    fontSize: 20,
  },
  btnView: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    margin: 10,
    width: 170,
    height: 50,
    backgroundColor: "#3caea3",
    padding: 10,
  },
  btnText: {
    textAlign: "center",
  },
  mainView: {
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
});

export default Login;
