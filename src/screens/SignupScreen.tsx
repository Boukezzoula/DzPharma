import { Button, Input } from "@rneui/themed";
import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { View, KeyboardAvoidingView, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export default function SignupScreen() {
  const { t, i18n } = useTranslation();
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignup = async () => {
    await createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        console.log("user details" + user.email);
      }
    );
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.container_inputstyle}>
        <Input
          placeholder="First Name"
          value={first_name}
          onChangeText={(text) => setFirst_name(text)}
        />
        <Input
          placeholder="Last Name"
          value={last_name}
          onChangeText={(text) => setLast_name(text)}
        />
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
          }}
          titleStyle={{ marginHorizontal: 5, color: "#fff" }}
          onPress={() => handleSignup()}
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
