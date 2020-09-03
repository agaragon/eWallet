import React from "react";
import { connect } from "react-redux";
import Navbar from "../Components/Navbar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Title from "../Components/Title";
function BalanceData(props) {
  let titleContentTransactions = "Suas transações";
  let titleContentPayments = "Seus pagamentos";
  return (
    <ScrollView
      contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}
      style={styles.mainView}
    >
      <View
        style={{
          marginTop: 150,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.text}>{titleContentTransactions}</Text>
        {props.transactions.map((transaction, index) => {
          return (
            <View
              style={{
                borderWidth: 1,
                width: 300,
                marginTop: 10,
                backgroundColor: "lightblue",
              }}
              key={index}
            >
              <Title
                content={`${transaction.typeOfTransaction}
Data: ${transaction.date.getDate()}/${
                  transaction.date.getMonth() + 1
                }/${transaction.date.getFullYear()}
Conta: ${transaction.toAccount}
Agência: ${transaction.toAgency}
Valor: R$ ${
                  transaction.typeOfTransaction === "Depósito" ? "+" : "-"
                }${transaction.value.toFixed(2).replace(".", ",")}`}
              />
            </View>
          );
        })}
        <Text style={styles.text}>{titleContentPayments}</Text>
        {props.payments.map((payment, index) => {
          return (
            <View
              key={index}
              style={{
                borderWidth: 1,
                width: 300,
                marginTop: 10,
                backgroundColor: "lightblue",
              }}
            >
              <Title
                content={`Valor R$ -${payment.amount
                  .toFixed(2)
                  .replace(".", ",")}`}
              />
              <Title
                content={`Data do vencimento ${payment.date.getDate()}/${payment.date.getMonth()}/${payment.date.getFullYear()}`}
              />
              <Title
                content={`Código de barras:
${payment.codeBar}`}
              />
            </View>
          );
        })}

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
    </ScrollView>
  );
}

let primaryColor = "#173f5f";
const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    fontSize: 30,
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
    flexGrow: 1,
  },
});

const mapStateToProps = (state) => {
  return {
    user: state.user,
    transactions: state.transactions,
    payments: state.payments,
  };
};
export default connect(mapStateToProps)(BalanceData);
