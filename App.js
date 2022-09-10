import { StyleSheet, Text, View } from "react-native";
import { en } from "./src/i18n/en";
import { ar } from "./src/i18n/ar";
import { fr } from "./src/i18n/fr";
import "./src/i18n/i18n";
import { useTranslation } from "react-i18next";
import Welcome from "./src/screens/Welcome";
export default function App() {
  const { t, i18n } = useTranslation();
  return <Welcome></Welcome>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#133657",
    justifyContent: "center",
    marginTop: 60,
    alignItems: "center",
  },
});
