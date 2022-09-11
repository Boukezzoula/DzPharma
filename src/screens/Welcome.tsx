import { Button } from "@rneui/base";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Input } from "@rneui/themed";
import { useTranslation } from "react-i18next";
import { KeyboardAvoidingView } from "react-native";

export default function Welcome({ navigation }) {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.container_inputstyle}>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.container_buttonstyle}>
        <Button
          type="solid"
          color="#E30D18"
          buttonStyle={{
            borderRadius: 30,
            margin: 20,
            alignSelf: "center",
            justifyContent: "center",
          }}
          titleStyle={{ marginHorizontal: 5, color: "#fff" }}
          onPress={() => {
            navigation.navigate("root", { screen: "emergency" });
          }}
        >
          {t("user_login")}
          <Icon name="user" color="#fff" size={18} />
        </Button>
        <Button
          type="solid"
          color="#E30D18"
          buttonStyle={{
            borderRadius: 30,
            margin: 20,
            alignSelf: "center",
          }}
          titleStyle={{ marginHorizontal: 5, color: "#fff" }}
          onPress={() => navigation.navigate("singupScreen")}
        >
          {t("user_signup")}
          <Icon name="user-plus" color="#fff" size={18} />
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container_inputstyle: {
    width: "80%",
  },
  container_buttonstyle: {
    width: "60%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#133657",
    opacity: 0.8,
  },
});
