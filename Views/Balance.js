import React, { useState } from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Navbar from "../Components/Navbar";
import DateTimePicker from "@react-native-community/datetimepicker";
import Title from "../Components/Title";

function Balance(props) {
  const [startDate, setStartDate] = useState(new Date(1598051730000));
  const [finalDate, setFinalDate] = useState(new Date(1598051730000));
  const [showSelectStart, setShowSelectStart] = useState(false);
  const [showSelectEnd, setShowSelectEnd] = useState(false);

  const onChangeStartDate = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setShowSelectStart(Platform.OS === "ios");
    setStartDate(currentDate);
  };
  const onChangeFinalDate = (event, selectedDate) => {
    const currentDate = selectedDate || finalDate;
    setShowSelectEnd(Platform.OS === "ios");
    setFinalDate(currentDate);
  };

  const showSelectStartDatePicker = () => {
    setShowSelectStart(true);
  };
  const showSelectEndDatePicker = () => {
    setShowSelectEnd(true);
  };

  let titleContent = "Qual período você gostaria de consultar?";
  return (
    <View style={[styles.mainView, { flexDirection: "column-reverse" }]}>
      <View
        style={{
          marginTop: 120,
          width: 300,
          position: "absolute",
          top: 120,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Title content={titleContent} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: 300,
          }}
        >
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={showSelectStartDatePicker}
                style={[styles.btnView, { width: 125 }]}
              >
                <Text style={styles.btnText}>Início</Text>
              </TouchableOpacity>
              {showSelectStart && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={startDate}
                  mode={"date"}
                  is24Hour={true}
                  display="default"
                  onChange={onChangeStartDate}
                />
              )}
              <Text style={styles.title}>
                {startDate.getDate()}/{startDate.getMonth() + 1}/
                {startDate.getFullYear()}
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                onPress={showSelectEndDatePicker}
                style={[styles.btnView, { width: 125 }]}
              >
                <Text style={styles.btnText}>Final</Text>
              </TouchableOpacity>
              {showSelectEnd && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={finalDate}
                  mode={"date"}
                  is24Hour={true}
                  display="default"
                  onChange={onChangeFinalDate}
                />
              )}

              <Text style={styles.title}>
                {finalDate.getDate()}/{finalDate.getMonth() + 1}/
                {finalDate.getFullYear()}
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={[styles.btnView]}
                onPress={() => {
                  props.navigation.navigate("HistoryOfTransactions");
                  props.dispatch({
                    type: "BILL_QUERY",
                    startDate: startDate,
                    finalDate: finalDate,
                    payments: props.payments,
                    transactions: props.transactions,
                  });
                }}
              >
                <Text style={styles.btnText}>Faça sua consulta</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnView}
                onPress={() => {
                  props.navigation.navigate("Home");
                }}
              >
                <Text style={styles.btnText}>Retorne ao menu principal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <Navbar user={props.user} navigation={props.navigation} />
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
  title: {
    color: primaryColor,
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
    fontWeight: "600",
    color: "#c3f2fc",
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
    color: primaryColor,
  },

  mainView: {
    backgroundColor: "#3689b2",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

const mapStateToProps = (state) => {
  return {
    user: state.user,
    transactions: state.transactions,
    payments: state.payments,
  };
};
export default connect(mapStateToProps)(Balance);
