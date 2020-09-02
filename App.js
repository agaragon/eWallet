import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import Login from "./Login";
import Home from "./Home";
import Payments from "./Payments";
import Balance from "./Balance";
import Registration from "./Registration";
import Deposit from "./Deposit";
import Bill from "./Bill";
import BalanceData from "./BalanceData";
import ConfirmDeposit from "./ConfirmDeposit";
import ConfirmPayment from "./ConfirmPayment";
import { Provider } from "react-redux";
import Transfers from "./Transfers";
import "react-native-gesture-handler";
import configureStore from "./configureStore";
const { persistor, store } = configureStore();

export default function App(props) {
  let user = {
    balance: "200,00",
    name: "André Aragon",
    cpf: "314.159.265-35",
  };
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Login"
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Balance" component={Balance} />
          <Stack.Screen name="Transfers" component={Transfers} />
          <Stack.Screen name="Payments" component={Payments} />
          <Stack.Screen name="Registration" component={Registration} />
          <Stack.Screen name="Deposit" component={Deposit} />
          <Stack.Screen name="BalanceData" component={BalanceData} />
          <Stack.Screen name="ConfirmDeposit" component={ConfirmDeposit} />
          <Stack.Screen name="ConfirmPayment" component={ConfirmPayment} />
          <Stack.Screen name="Bill" component={Bill} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
