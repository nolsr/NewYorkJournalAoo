import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const AppTitle = () => {
  return (
    <View>
      <Image
        source={require("../../assets/NewYork.png")}
        style={styles.headerImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    width: "100%",
    height: 300,
    paddingLeft: 20,
  },
});

export default AppTitle;
