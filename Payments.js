import React, { useState } from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";

function Payments(props) {
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);
  const [firstInput, changeFirstInput] = useState("");
  const [secondInput, changeSecondInput] = useState("");
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
        Faça um pagamento
      </Text>
      <View style={styles.textView}>
        <Text style={styles.text}>Entre com o código de barras</Text>
        <TextInput
          style={styles.inputField}
          selectTextOnFocus={false}
          onChangeText={(text) => {
            changeFirstInput(text);
          }}
        />
        <TextInput
          style={styles.inputField}
          selectTextOnFocus={false}
          onChangeText={(text) => {
            changeSecondInput(text);
          }}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.btnView} onPress={showDatepicker}>
          <Text style={styles.btnText} onPress={showDatepicker}>
            Escolha uma data para seu pagamento
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
        Data do pagamento: {date.getDate()}/{date.getMonth() + 1}/
        {date.getFullYear()}
      </Text>
      <TouchableOpacity
        style={styles.btnView}
        onPress={() => {
          // props.dispatch({type})
          props.navigation.navigate("Home");
        }}
      >
        <Text style={styles.btnText}>Confirme seu pagamento</Text>
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
  inputField: {
    margin: 10,
    color: "black",
    backgroundColor: "white",
    borderRadius: 3,
    padding: 3,
    width: 300,
    fontSize: 25,
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
    justifyContent: "center",
    flexGrow: 1,
  },
});

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(Payments);
