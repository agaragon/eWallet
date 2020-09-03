import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
let width = 270;
function TouchableButton(props) {
  width = props.width ? props.width : props.width;

  return (
    <TouchableOpacity style={styles.btnView} onPress={props.onPress}>
      <Text style={{ ...styles.btnText, width }}>{props.text}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btnView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    margin: 10,
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
});
export default TouchableButton;
