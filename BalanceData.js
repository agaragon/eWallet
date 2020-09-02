import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Title from "./Title";
function BalanceData(props) {
  let titleContentTransactions = "Suas transações";
  let titleContentPayments = "Seus pagamentos";
  return (
    <ScrollView
      contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}
      style={styles.mainView}
    >
      <View style={{ marginTop: 150 }}>
        <Title content={titleContentTransactions} />
        {props.transactions.map((transaction, index) => {
          return (
            <Title
              style={[styles.text]}
              key={index}
              content={`${transaction.typeOfTransaction}
Data: ${transaction.date.getDate()}/${
                transaction.date.getMonth() + 1
              }/${transaction.date.getFullYear()}
Conta: ${transaction.toAccount}
Agência: ${transaction.toAgency}
Valor: R$ ${transaction.value.toFixed(2).replace(".", ",")}`}
            />
          );
        })}
        <Title content={titleContentPayments} />
        {props.payments.map((payment, index) => {
          return (
            <View key={index}>
              <Title
                content={`Valor R$${payment.amount
                  .toFixed(2)
                  .replace(".", ",")}`}
              />
              <Title
                content={`Data do vencimento ${payment.date.getDate()}/${payment.date.getMonth()}/${payment.date.getFullYear()}`}
              />
            </View>
          );
        })}
        <TouchableOpacity
          style={styles.btnView}
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
// let primaryColor = "#111111";
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
