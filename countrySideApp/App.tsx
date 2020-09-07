import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./app/screens/Main";
import LoginScreen from "./app/screens/security/Login";
import SignUp from "./app/screens/security/SignUp";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";
import ContactUs from "./app/screens/security/ContactUs";
import Info from "./app/screens/security/Info";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Info">
        <Stack.Screen name="Info" component={Info} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}
const styles = StyleSheet.create({

  container: {
    paddingTop:44,
  }
});

