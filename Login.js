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
      <Text style={styles.title}>Acesse aqui sua carteira eletrônica!</Text>
      <View style={styles.textView1}>
        <Text style={styles.text}>Coloque seu Login</Text>
        <TextInput style={styles.inputField} />
      </View>
      <View style={styles.textView2}>
        <Text style={styles.text}>Coloque sua senha</Text>
        <TextInput
          placeholder="password"
          style={styles.inputField}
          secureTextEntry={true}
          placeholderTextColor="rgba(255, 255, 255, 0.3)"
          selectTextOnFocus={false}
        />
      </View>
      <TouchableOpacity style={styles.btnView1}>
        <Text style={styles.btnText}>Accesse sua conta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnView2}>
        <Text style={styles.btnText}>Registre-se com o seu telefone</Text>
      </TouchableOpacity>
      <Image
        style={styles.walletLogo}
        source={require("./assets/e-wallet.jpg")}
      />
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
  textView1: {
    marginTop: 0,
  },
  textView2: {
    marginTop: 20,
  },
  inputField: {
    height: 30,
    color: "black",
    backgroundColor: "#cccccc",
    borderRadius: 3,
    padding: 3,
  },
  text: {
    fontSize: 20,
    color: primaryColor,
  },
  title: {
    color: primaryColor,
    fontSize: 25,
    textAlign: "center",
    marginTop: -5,
    marginBottom: 20,
  },
  btnView1: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginTop: 15,
    width: 170,
    height: 50,
    backgroundColor: "#3caea3",
    padding: 0,
  },
  btnView2: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginTop: 10,
    // marginBottom: -50,
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
  walletLogo: {
    width: 180,
    height: 180,
    resizeMode: "contain",
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
