import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const IconButton = (props) => {
  const { icon, onPress } = props;

  return (
    <View onTouchEnd={onPress} style={styles.button}>
      <MaterialIcons
        name={icon}
        size={30}
        style={{ width: 30, height: 30 }}
        color="white"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#222e35",
    padding: 15,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "baseline",
    alignSelf: "flex-start",
    position: "absolute",
    right: 10,
    bottom: 10,
  },
});

export default IconButton;
