import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import Login from "./Views/Login";
import Home from "./Views/Home";
import Payments from "./Views/Payments";
import Balance from "./Views/Balance";
import Registration from "./Views/Registration";
import Deposit from "./Views/Deposit";
import Bill from "./Views/Bill";
import BalanceData from "./Views/BalanceData";
import ConfirmDeposit from "./Views/ConfirmDeposit";
import ConfirmPayment from "./Views/ConfirmPayment";
import BillInfo from "./Views/BillInfo";
import HistoryOfTransactions from "./Views/HistoryOfTransactions";
import { Provider } from "react-redux";
import Transfers from "./Views/Transfers";
import "react-native-gesture-handler";
import configureStore from "./configureStore";
const { persistor, store } = configureStore();

export default function App(props) {
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
          <Stack.Screen name="BillInfo" component={BillInfo} />
          <Stack.Screen name="Bill" component={Bill} />
          <Stack.Screen
            name="HistoryOfTransactions"
            component={HistoryOfTransactions}
          />
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
