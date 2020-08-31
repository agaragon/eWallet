import React, { useState } from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Text, TouchableOpacity, Button } from "react-native";
import Navbar from "./Navbar";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  faCashRegister,
  faMoneyBillAlt,
  faPiggyBank,
} from "@fortawesome/free-solid-svg-icons";
import Title from "./Title";

function Balance(props) {
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  let titleContent = "Qual mês você gostaria de consultar?";
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
            // marginTop: 120,
            flexDirection: "row",
            justifyContent: "space-around",
            width: 300,
          }}
        >
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <TouchableOpacity style={[styles.btnView]}>
              <Text style={styles.btnText} onPress={showDatepicker}>
                Escolha uma data para a sua consulta
              </Text>
            </TouchableOpacity>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={"date"}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
            <Text style={styles.title}>
              Mês da Consulta: {date.getMonth()}/{date.getFullYear()}
            </Text>
            <TouchableOpacity
              style={[styles.btnView]}
              onPress={() => props.navigation.navigate("Home")}
            >
              <Text style={styles.btnText}>Faça sua consulta</Text>
            </TouchableOpacity>
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
    fontSize: 35,
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
  };
};
export default connect(mapStateToProps)(Balance);
