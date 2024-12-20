import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { Context } from "../context/DiaryContext";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const ViewScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state, deleteDiaryPost } = useContext(Context);

  const item = state.posts.find(
    (diaryPost) => diaryPost.id === navigation.getParam("id")
  );

  return (
    <>
      {item && (
        <ScrollView
          keyboardShouldPersistTaps="handled"
          style={styles.background}>
          <View>
            {item.image ? (
              <Image source={{ uri: item.image }} style={styles.image} />
            ) : (
              <View style={styles.spacer} />
            )}
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => {
                navigation.navigate("Index");
              }}>
              <MaterialIcons
                name="chevron-left"
                size={30}
                color="black"
                style={styles.backIcon}
              />
            </TouchableOpacity>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.content}>{item.content}</Text>

            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => {
                navigation.navigate("Index");
                deleteDiaryPost(item.id);
              }}>
              <MaterialIcons
                name="edit"
                size={25}
                color="black"
                style={styles.icon}
              />
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.editButton}
              onPress={() => {
                navigation.navigate("Edit", {
                  id: item.id,
                  title: item.title,
                  content: item.content,
                  date: item.date,
                  image: item.image,
                });
              }}>
              <MaterialIcons
                name="edit"
                size={25}
                color="black"
                style={styles.icon}
              />
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
    backgroundColor: "#e6ddd0",
  },
  spacer: {
    marginTop: 30,
  },
  image: {
    width: "100%",
    aspectRatio: 1.5,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#222e35",
    fontFamily: "serif",
    marginTop: 25,
  },
  date: {
    color: "#807a73",
    textAlign: "center",
  },
  content: {
    fontSize: 20,
    color: "#222e35",
    lineHeight: 30,
    padding: 20,
  },
  icon: {
    color: "white",
    position: "absolute",
    width: 25,
    height: 25,
    left: 10,
    top: 10,
  },
  editButton: {
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "#222e35",
    padding: 10,
    borderRadius: 15,
    flexDirection: "row",
    position: "relative",
  },
  deleteButton: {
    marginHorizontal: 10,
    backgroundColor: "#EF233C",
    padding: 10,
    borderRadius: 15,
    flexDirection: "row",
    position: "relative",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    width: "100%",
    textAlign: "center",
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#222e35",
    justifyContent: "center",
    alignItems: "center",
  },
  backIcon: {
    color: "white",
    width: 30,
    height: 30,
  },
});

export default ViewScreen;
