import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Title from "./Title";
import { actionChannel } from "redux-saga/effects";
function Bill(props) {
  let date = props.bill.dueDate;
  let titleContent = "Dados do seu boleto:";
  return (
    <View style={styles.mainView}>
      <Title content={titleContent} />
      <Title
        content={`Valor a pagar R$ ${props.bill.value
          .toFixed(2)
          .replace(".", ",")}`}
      />
      <Title
        content={`Data de vencimento: ${date.getDate()}/${
          date.getMonth() + 1
        }/${date.getFullYear()}`}
      />
      <TouchableOpacity
        style={styles.btnView}
        onPress={() => {
          props.dispatch({
            type: "SAGA_PAY_BILL",
            amount: props.bill.value,
            date: props.bill.dueDate,
            codeBar: props.bill.codeBar,
            typeOfTransaction: "Payment",
          });
          props.navigation.navigate("Home");
        }}
      >
        <Text style={styles.btnText}>Confirmar pagamento do boleto</Text>
      </TouchableOpacity>
      <Navbar user={props.user} navigation={props.navigation} />
    </View>
  );
}

let primaryColor = "#173f5f";
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: primaryColor,
    textAlign: "center",
  },
  title: {
    color: primaryColor,
    fontSize: 35,
    textAlign: "center",
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
    flexGrow: 1,
  },
});

const mapStateToProps = (state) => {
  return {
    user: state.user,
    bill: state.bill,
  };
};
export default connect(mapStateToProps)(Bill);
