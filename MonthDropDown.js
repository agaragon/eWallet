import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSortDown, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

function MonthDropDown(props) {
  const [toggleStatus, changeToggle] = useState(false);

  let months = [
    "Mês",
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const [chosenMonth, changeMonth] = useState(months[0]);
  return (
    <TouchableOpacity
      onPress={() => {
        changeToggle(!toggleStatus);
      }}
      style={[
        styles.flexRow,
        {
          backgroundColor: secondaryColor,
          justifyContent: "center",
        },
      ]}
    >
      <TouchableOpacity
        onPress={() => {
          changeToggle(!toggleStatus);
        }}
        style={[
          {
            width: 60,
            display: toggleStatus ? "none" : "flex",
          },
          styles.centeredFlex,
        ]}
      >
        <Text style={styles.monthText}>{chosenMonth}</Text>
      </TouchableOpacity>
      <View
        style={{
          display: toggleStatus ? "flex" : "none",
          flexDirection: "column",
        }}
      >
        {months.map((month) => {
          return (
            <TouchableOpacity
              onPress={() => {
                changeToggle(!toggleStatus);
                changeMonth(month);
              }}
              style={[
                styles.centeredFlex,
                { backgroundColor: secondaryColor, width: "100%" },
              ]}
            >
              <Text key={month} style={styles.monthText}>
                {month}
              </Text>
              <View style={styles.horizontalLine} />
            </TouchableOpacity>
          );
        })}
      </View>
      <FontAwesomeIcon color={primaryColor} icon={faSortDown} />
    </TouchableOpacity>
  );
}
let primaryColor = "#173f5f";
let secondaryColor = "#e5e5e5";
let mainFontSize = 20;
const styles = StyleSheet.create({
  monthText: {
    fontSize: mainFontSize,
  },
  flexRow: {
    flexDirection: "row",
  },
  horizontalLine: {
    height: 1,
    width: "80%",
    backgroundColor: "#ccc",
  },
  centeredFlex: {
    justifyContent: "center",
    alignItems: "center",
    margin: 3,
  },
});
export default MonthDropDown;