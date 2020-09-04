import React, { useState } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSortDown, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
  const [toggleStatus, toggleAction] = useState(false);
  return (
    <View style={styles.mainView}>
      <View style={styles.container}>
        <Image
          style={styles.serasaLogo}
          source={require("../assets/serasa-logo.png")}
        />
        <TouchableOpacity
          style={styles.containerFlex}
          onPress={() => {
            toggleAction(!toggleStatus);
          }}
        >
          <Text style={styles.userName}>{props.user?.name}</Text>
          <FontAwesomeIcon size={20} style={styles.arrow} icon={faSortDown} />
        </TouchableOpacity>
      </View>

      <View style={{ display: toggleStatus ? "flex" : "none" }}>
        <View style={styles.dropdownMenu}>
          <View>
            <Text style={styles.dropdownText}>Nome: {props.user?.name}</Text>
            <Text style={styles.dropdownText}>CPF: {props.user?.cpf}</Text>
            <TouchableOpacity
              style={styles.logoutView}
              onPress={() => {
                props.navigation.navigate("Login");
              }}
            >
              <Text style={styles.dropdownText}>Deslogar</Text>
              <FontAwesomeIcon
                style={styles.signoutIcon}
                size={20}
                icon={faSignOutAlt}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
let primaryColor = "#173f5f";
const styles = StyleSheet.create({
  text: { color: primaryColor, fontSize: 20 },
  mainView: { width: "100%", top: 0, position: "absolute" },
  container: {
    flexDirection: "row",
    backgroundColor: "#5093cb",
    height: 110,
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "space-between",
  },
  signoutIcon: { margin: 10, color: primaryColor },
  arrow: {
    color: primaryColor,
  },
  logoutView: {
    flexDirection: "row",
    marginRight: 20,
    alignItems: "center",
  },
  dropdownText: {
    margin: 10,
    color: primaryColor,
    fontSize: 20,
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
    color: primaryColor,
  },
  dropdownMenu: {
    backgroundColor: "#5093cb",
  },
});
export default Navbar;
