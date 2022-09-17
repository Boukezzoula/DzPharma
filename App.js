import { StyleSheet } from "react-native";
import "./src/i18n/i18n";
import { useTranslation } from "react-i18next";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeStack from "./src/navigation/WelcomeStack";
import { useState } from "react";
import { useEffect } from "react";
import { auth } from "./firebase";
import MainStack from "./src/navigation/MainStack";
export default function App() {
  const { t, i18n } = useTranslation();
  const [user, setUser] = useState();
  const [initialized, setInitialized] = useState(true);
  function onAuthStateChanged(user) {
    setUser(user);
    if (initialized) {
      setInitialized(false);
    }
  }

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initialized) return null;

  return (
    <NavigationContainer>
      {!user ? <WelcomeStack></WelcomeStack> : <MainStack></MainStack>}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#133657",
    justifyContent: "center",
    marginTop: 60,
    alignItems: "center",
  },
});
