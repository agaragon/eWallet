import React from "react";
import View from "react-native";
import Navbar from "./Navbar";
function Balance(props) {
  return (
    <View>
      <Navbar user={props.user} />
    </View>
  );
}

export default Balance;
