import React, { useState } from "react";
import Navbar from "./Navbar";
import {
  StyleSheet,
  Text,
  Navigator,
  View,
  TextInput,
  Button,
} from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";

function Payments(props) {
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    console.log(typeof date);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <View style={styles.mainView}>
      <Text style={[styles.title, { marginBottom: 35 }]}>
        Faça uma transferência
      </Text>
      <View style={styles.textView2}>
        <Text style={styles.text}>Entre com o código de barras</Text>
        <TextInput
          placeholder="password"
          style={styles.inputField}
          placeholderTextColor="rgba(255, 255, 255, 0.3)"
          selectTextOnFocus={false}
        />
        <TextInput
          placeholder="password"
          style={styles.inputField}
          placeholderTextColor="rgba(255, 255, 255, 0.3)"
          selectTextOnFocus={false}
        />
      </View>
      <View>
        <View style={styles.dateTimePicker}>
          <Button
            onPress={showDatepicker}
            title="Escolha uma data para a sua transferência"
          />
        </View>
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
        Data da transferência: {date.getDay()}/{date.getMonth()}/
        {date.getFullYear()}
      </Text>
      <Navbar user={props.user} />
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
    justifyContent: "center",
    flexGrow: 1,
  },
});

export default Payments;
