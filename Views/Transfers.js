import React, { useState } from "react";
import { connect } from "react-redux";
import Navbar from "../Components/Navbar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

function Transfers(props) {
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);
  const [transferValue, changeTransferValue] = useState(0);
  const [transferAccount, changeTransferAccount] = useState("");
  const [transferAgency, changeTransferAgency] = useState("");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <View style={styles.mainView}>
      <Text style={[styles.title, { marginBottom: 35 }]}>
        Faça uma transferência
      </Text>
      <View style={styles.textView}>
        <Text style={[styles.text, { width: 120 }]}>
          Conta para transferência
        </Text>
        <TextInput
          style={[styles.inputField, { width: 150, fontSize: 25 }]}
          selectTextOnFocus={false}
          onChangeText={(text) => {
            changeTransferAccount(text);
          }}
        />
      </View>
      <View style={styles.textView}>
        <Text style={[styles.text, { width: 120 }]}>Agência bancária</Text>
        <TextInput
          style={[
            styles.inputField,
            { width: 90, marginRight: 70, fontSize: 25 },
          ]}
          placeholderTextColor="rgba(255, 255, 255, 0.3)"
          selectTextOnFocus={false}
          onChangeText={(text) => {
            changeTransferAgency(text);
          }}
        />
      </View>
      <View style={styles.textView}>
        <Text style={[styles.text, { width: 120 }]}>
          Valor da transferência
        </Text>
        <TextInput
          style={[
            styles.inputField,
            { width: 90, marginRight: 70, fontSize: 25 },
          ]}
          onChangeText={(text) => {
            text = parseFloat(
              text.replace("R$", "").replace(".", "").replace(",", ".")
            );
            changeTransferValue(text);
          }}
        />
      </View>

      <Text style={styles.text}>
        O valor da transferência é R${" "}
        {transferValue.toFixed(2).replace(".", ",")}
      </Text>
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity style={styles.btnView} onPress={showDatepicker}>
          <Text style={styles.btnText} onPress={showDatepicker}>
            Escolha uma data para sua transferência
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
      </View>
      <Text style={styles.title}>
        Data da transferência: {date.getDate()}/{date.getMonth() + 1}/
        {date.getFullYear()}
      </Text>

      <TouchableOpacity
        style={styles.btnView}
        onPress={() => {
          // console.log(transferAccount);
          props.dispatch({
            type: "TRANSFER_MONEY",
            amount: transferValue,
            date: date,
            account: transferAccount,
            agency: transferAgency,
          });
          props.navigation.navigate("Home");
        }}
      >
        <Text style={styles.btnText}>Confirme sua transferência</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnView}
        onPress={() => {
          props.navigation.navigate("Home");
        }}
      >
        <Text style={styles.btnText}>Retorne ao menu principal</Text>
      </TouchableOpacity>
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
  textView: { flexDirection: "row" },
  dateTimePicker: { marginTop: 30 },
  inputField: {
    margin: 10,
    color: "black",
    backgroundColor: "white",
    borderRadius: 3,
    padding: 3,
    width: 300,
  },
  text: {
    fontSize: 20,
    color: primaryColor,
    textAlign: "center",
  },
  title: {
    color: primaryColor,
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
    flexGrow: 1,
    paddingTop: 120,
  },
});

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(Transfers);
