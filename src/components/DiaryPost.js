import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

const DiaryPost = (props) => {
  const { item, navigation } = props;
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("View", { id: item.id })}
      style={styles.container}>
      {item.image && (
        <Image source={{ uri: item.image }} style={styles.image} />
      )}
      <View style={styles.contentContainer}>
        <View style={styles.dateContainer}>
          <Text style={styles.month}>
            {months[Number(item.date.substring(0, 2)) - 1]}
          </Text>
          <View style={styles.seperator}></View>
          <Text style={styles.day}>{item.date.substring(3, 5)}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.content} numberOfLines={3} ellipsizeMode="tail">
            {item.content}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginBottom: 10,
  },
  contentContainer: {
    flexDirection: "row",
  },
  dateContainer: {
    width: 100,
    height: 120,
    backgroundColor: "#fff6e6",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10,
    alignContent: "center",
    justifyContent: "center",
  },
  month: {
    fontSize: 20,
    letterSpacing: 10,
    fontWeight: "bold",
    alignSelf: "center",
    color: "#222e35",
    textAlign: "center",
    marginBottom: 10,
  },
  seperator: {
    width: "70%",
    height: 2,
    marginHorizontal: "15%",
    backgroundColor: "#222e35",
  },
  day: {
    fontSize: 50,
    letterSpacing: 5,
    alignSelf: "center",
    color: "#222e35",
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    padding: 10,
    height: 120,
    overflow: "hidden",
  },
  content: {
    color: "#4d4945",
    lineHeight: 25,
  },
  title: {
    color: "#222e35",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 5,
    fontFamily: "serif",
  },
  image: {
    width: "100%",
    aspectRatio: 1.5,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default DiaryPost;
