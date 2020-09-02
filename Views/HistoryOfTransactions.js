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
              width: 200,
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 30,
            }}
          >
            <Text style={[styles.text, { fontSize: 30 }]}>Data</Text>
            {/* <Text style={styles.text}>{transaction.typeOfTransaction}</Text> */}
            <Text style={[styles.text, { fontSize: 30 }]}>Valor</Text>
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
                  width: 200,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.text}>{`${transaction.date.getDate()}/${
                  transaction.date.getMonth() + 1
                }`}</Text>
                <Text style={styles.text}>
                  {transaction.typeOfTransaction === "Depósito" ? "+" : "-"}R$
                  {transaction.value.toFixed(2).replace(".", ",")}
                </Text>
                {/* <Text>{transaction.typeOfTransaction}</Text> */}
              </View>
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
          );
        })}
      </View>
      <Navbar user={props.user} navigation={props.navigation} />
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
    transactions: state.transactions,
    payments: state.payments,
  };
};

export default connect(mapStateToProps)(HistoryOfTransactions);
