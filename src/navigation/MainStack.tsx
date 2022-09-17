import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NearMeScreen from "../screens/mainScreens/NearMeScreen";
import OnlineOrderScreen from "../screens/mainScreens/OnlineOrderScreen";
import SettingsScreen from "../screens/mainScreens/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function MainStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Near Me" component={NearMeScreen} />
      <Tab.Screen name="Online Order" component={OnlineOrderScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
