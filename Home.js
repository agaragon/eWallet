import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCashRegister,
  faMoneyBillAlt,
  faPiggyBank,
} from "@fortawesome/free-solid-svg-icons";
function Home(props) {
  return (
    <View style={styles.mainView}>
      <Navbar user={props.user} />
      <Text style={styles.title}>Bem Vindo {props.user?.name}!</Text>
      <Text style={styles.text}>O seu saldo é R$ {props.user?.balance}</Text>
      <TouchableOpacity style={styles.btnView}>
        <Text style={styles.btnText}>Acesse aqui o seu extrato</Text>
        <FontAwesomeIcon size={40} color="#c3f2fc" icon={faPiggyBank} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnView}>
        <Text style={styles.btnText}>Faça uma transferência</Text>
        <FontAwesomeIcon size={40} color="#c3f2fc" icon={faCashRegister} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnView}>
        <Text style={styles.btnText}>Pague uma conta </Text>
        <FontAwesomeIcon size={40} color="#c3f2fc" icon={faMoneyBillAlt} />
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
  inputField: {
    margin: 10,
    color: "black",
    backgroundColor: "white",
    borderRadius: 3,
    padding: 3,
  },
  text: {
    fontSize: 20,
    color: "#173f5f",
  },
  title: {
    color: "#173f5f",
    fontSize: 35,
    textAlign: "center",
    marginBottom: 20,
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
    fontSize: 15,
    fontWeight: "600",
    color: "#c3f2fc",
    marginRight: 20,
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
    width: 160,
    height: 160,
    resizeMode: "contain",
  },
});

export default Home;
