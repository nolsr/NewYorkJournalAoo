import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/DiaryContext";

const ErrorDisplay = () => {
  const { state } = useContext(Context);

  return (
    <>
      {state.httpError && (
        <View style={styles.toastContainer}>
          <Text style={styles.toastText}>{state.httpError}</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    position: "absolute",
    bottom: 50,
    left: 20,
    right: 20,
    backgroundColor: "#FF4D4D",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    zIndex: 99999,
  },
  toastText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default ErrorDisplay;
