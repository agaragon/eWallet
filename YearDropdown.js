import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

function YearDropdown(props) {
  const [toggleStatus, changeToggle] = useState(false);
  const createArrayOfYears = (firstYear, lastYear) => {
    let years = ["Ano"];
    let i;
    for (i = firstYear; i <= lastYear; i++) {
      years.push(i);
    }
    return years;
  };
  const arrayOfYears = createArrayOfYears(2010, 2020);
  const [chosenYear, changeYear] = useState(arrayOfYears[0]);
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
          height: 30,
          backgroundColor: secondaryColor,
        },
      ]}
    >
      <TouchableOpacity
        onPress={() => {
          changeToggle(!toggleStatus);
        }}
        style={[
          {
            width: 80,
            display: toggleStatus ? "none" : "flex",
            backgroundColor: secondaryColor,
          },
          styles.centeredFlex,
        ]}
      >
        <Text style={styles.yearText}>{chosenYear}</Text>
      </TouchableOpacity>
      <View
        style={{
          display: toggleStatus ? "flex" : "none",
          flexDirection: "column",
        }}
      >
        {arrayOfYears.map((year) => {
          return (
            <TouchableOpacity
              key={year}
              onPress={() => {
                changeToggle(!toggleStatus);
                changeYear(year);
              }}
              style={[
                styles.centeredFlex,
                {
                  backgroundColor: secondaryColor,
                  width: "100%",
                  marginTop: -3,
                },
              ]}
            >
              <Text key={year} style={styles.yearText}>
                {year}
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
  yearText: {
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
export default YearDropdown;
