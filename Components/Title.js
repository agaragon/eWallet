import React from "react";
import { View, Text, StyleSheet } from "react-native";
function Title(props) {
  return (
    <Text style={{ ...styles.title, ...props.style }}>{props.content}</Text>
  );
}
let primaryColor = "#173f5f";
const styles = StyleSheet.create({
  title: {
    color: primaryColor,
    fontSize: 25,
    textAlign: "center",
    marginBottom: 20,
  },
});

export default Title;
