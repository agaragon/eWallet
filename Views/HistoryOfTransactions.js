import React from "react";
import Navbar from "../Components/Navbar";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
function HistoryOfTransactions(props) {
  let history = [];
  props.transactions.forEach((transaction) => {
    history.push({
      date: transaction.date,
      value: transaction.value,
      typeOfTransaction: transaction.typeOfTransaction,
      toAccount: transaction.toAccount,
      toAgency: transaction.toAgency,
    });
  });
  props.payments.forEach((payment) => {
    history.push({
      date: payment.date,
      value: payment.amount,
      codeBar: payment.codeBar,
      typeOfTransaction: payment.typeOfTransaction,
    });
  });
  history.sort((a, b) => b.date - a.date);

  return (
    <ScrollView>
      <View style={{ marginTop: 120 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginRight: 10,
            marginLeft: 10,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 30,
            }}
          >
            <Text style={[styles.text, { fontSize: 30 }]}>Data</Text>
            <Text style={[styles.text, { fontSize: 30 }]}>Valor</Text>
            <Text style={[styles.text, { fontSize: 30 }]}>Transação</Text>
            <View style={{ width: 30 }}></View>
          </View>
        </View>
        {history.map((transaction, index) => {
          return (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginRight: 10,
                marginLeft: 10,
              }}
              key={index}
            >
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.text}>{`${transaction.date.getDate()}/${
                  transaction.date.getMonth() + 1
                }/${transaction.date.getFullYear()}`}</Text>
                <Text style={styles.text}>
                  {transaction.typeOfTransaction === "Depósito" ? "+" : "-"}R$
                  {transaction.value.toFixed(2).replace(".", ",")}
                </Text>
                <Text style={styles.text}>{transaction.typeOfTransaction}</Text>
                <TouchableOpacity
                  style={styles.btnView}
                  onPress={() => {
                    props.dispatch({
                      type: "MORE_INFO",
                      value: transaction.value,
                      date: transaction.date,
                      codeBar: transaction.codeBar,
                      typeOfTransaction: transaction.typeOfTransaction,
                      toAgency: transaction.toAgency,
                      toAccount: transaction.toAccount,
                    });
                    props.navigation.navigate("BillInfo");
                  }}
                >
                  <Text style={[styles.btnText, { fontSize: 30 }]}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>
      <Navbar user={props.user} navigation={props.navigation} />
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={[styles.btnView, { width: 300 }]}
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <Text style={styles.btnText}>Volte à página anterior</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginTop: 10,
  },
  btnView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    margin: 10,
    width: 50,
    height: 50,
    backgroundColor: "#3caea3",
    padding: 0,
  },
  btnText: {
    textAlign: "center",
    marginLeft: 15,
    fontSize: 15,
    fontWeight: "600",
    color: "#c3f2fc",
    marginRight: 20,
  },
});

const mapStateToProps = (state) => {
  return {
    user: state.user,
    transactions: state.queryResultTransactions,
    payments: state.queryResultPayments,
  };
};

export default connect(mapStateToProps)(HistoryOfTransactions);
