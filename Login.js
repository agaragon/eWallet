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
      <View>
        <Text style={styles.title}>Acesse aqui sua carteira eletrônica!</Text>
      </View>
      <View>
        <Text style={styles.text}>Coloque seu Login</Text>
        <TextInput style={styles.inputField} />
      </View>
      <View>
        <Text style={styles.text}>Coloque sua senha</Text>
        <TextInput
          placeholder="password"
          style={styles.inputField}
          secureTextEntry={true}
          placeholderTextColor="rgba(255, 255, 255, 0.3)"
          selectTextOnFocus={false}
          autoFocus={false}
          onFocus="none"
        />
      </View>
      <TouchableOpacity style={styles.btnView}>
        <Text style={styles.btnText}>Accesse sua conta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnView}>
        <Text style={styles.btnText}>Registre-se com o seu telefone</Text>
      </TouchableOpacity>
      <Image
        style={styles.walletLogo}
        source={require("./assets/e-wallet.jpg")}
      />
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
  inputField: {
    margin: 10,
    color: "black",
    backgroundColor: "white",
    borderRadius: 3,
    padding: 3,
    border: "none",
  },
  text: {
    fontSize: 20,
    color: "#173f5f",
  },
  title: {
    color: "#173f5f",
    fontSize: 25,
    textAlign: "center",
    marginBottom: 20,
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
    fontWeight: 600,
    color: "#c3f2fc",
  },
  mainView: {
    backgroundColor: "#3689b2",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  walletLogo: {
    width: 180,
    height: 180,
    resizeMode: "contain",
    marginBottom: -100,
  },
  serasaLogo: {
    width: 260,
    height: 260,
    resizeMode: "contain",
    marginTop: -160,
    marginBottom: -70,
  },
});

export default Login;
