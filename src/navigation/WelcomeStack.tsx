import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SignupScreen from "../screens/SignupScreen";
import Welcome from "../screens/Welcome";
import MainStack from "./MainStack";

const Stack = createNativeStackNavigator();

export default function WelcomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="welcomeScreen"
        component={Welcome}
        options={{ title: "Welcome", headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="singupScreen"
        component={SignupScreen}
        options={{ title: "Signup", headerShown: true }}
      ></Stack.Screen>
      <Stack.Screen name="MainApp" component={MainStack}></Stack.Screen>
    </Stack.Navigator>
  );
}
