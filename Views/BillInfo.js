import React from "react";
import Navbar from "../Components/Navbar";
import Title from "../Components/Title";
import { connect } from "react-redux";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
function BillInfo(props) {
  return (
    <View>
      <View style={{ marginTop: 110, alignItems: "center" }}>
        {props.moreInfo.typeOfTransaction !== "Pagamento" ? (
          <View
            style={{
              borderWidth: 1,
              width: 300,
              marginTop: 10,
              backgroundColor: "lightblue",
            }}
          >
            <Title
              content={`${props.moreInfo.typeOfTransaction}
Data: ${props.moreInfo.date.getDate()}/${
                props.moreInfo.date.getMonth() + 1
              }/${props.moreInfo.date.getFullYear()}
Conta: ${props.moreInfo.toAccount}
Agência: ${props.moreInfo.toAgency}
Valor: R$ ${
                props.moreInfo.typeOfTransaction === "Depósito" ? "+" : "-"
              }${props.moreInfo.value.toFixed(2).replace(".", ",")}`}
            />
          </View>
        ) : (
          <View
            style={{
              borderWidth: 1,
              width: 300,
              marginTop: 10,
              backgroundColor: "lightblue",
            }}
          >
            <Title
              content={`Valor R$ -${props.moreInfo.value
                .toFixed(2)
                .replace(".", ",")}`}
            />
            <Title
              content={`Data do vencimento ${props.moreInfo.date.getDate()}/${props.moreInfo.date.getMonth()}/${props.moreInfo.date.getFullYear()}`}
            />
            <Title
              content={`Código de barras:
${props.moreInfo.codeBar}`}
            />
          </View>
        )}
        <TouchableOpacity
          style={[styles.btnView]}
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <Text style={styles.btnText}>Volte à página anterior</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btnView]}
          onPress={() => {
            props.navigation.navigate("Home");
          }}
        >
          <Text style={styles.btnText}>Retorne ao menu principal</Text>
        </TouchableOpacity>
      </View>
      <Navbar user={props.user} navigation={props.navigation} />
    </View>
  );
}
const styles = StyleSheet.create({
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
});
const mapStateToProps = (state) => {
  return {
    user: state.user,
    moreInfo: state.moreInfo,
  };
};
export default connect(mapStateToProps)(BillInfo);
