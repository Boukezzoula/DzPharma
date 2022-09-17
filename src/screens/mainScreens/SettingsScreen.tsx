import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "@rneui/themed";
import { auth } from "../../../firebase";
export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Button
        title="Log Out"
        loading={false}
        loadingProps={{ size: "small", color: "white" }}
        buttonStyle={{
          backgroundColor: "rgba(111, 202, 186, 1)",
          borderRadius: 5,
        }}
        titleStyle={{ fontWeight: "bold", fontSize: 23 }}
        containerStyle={{
          marginHorizontal: 50,
          height: 50,
          width: 200,
          marginVertical: 10,
        }}
        onPress={() => auth.signOut()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#133657",
    opacity: 0.8,
  },
});
