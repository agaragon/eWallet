import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
function Navbar(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.serasaLogo}
        source={require("./assets/serasa-logo.jpg")}
      />
      <View style={styles.containerFlex}>
        <Text style={styles.userName}>{props.user?.name}</Text>
        <FontAwesomeIcon size={20} color="white" icon={faSortDown} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#5093cb",
    height: 80,
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerFlex: {
    flexDirection: "row",
    marginRight: 20,
  },
  serasaLogo: {
    marginLeft: 15,
    width: 100,
    height: "100%",
    resizeMode: "contain",
  },
  userName: {
    marginRight: 20,
    fontSize: 20,
    color: "white",
  },
});
export default Navbar;
