import React, { useContext, useEffect } from "react";
import AppTitle from "../components/AppTitle";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";
import { Context } from "../context/DiaryContext";
import IconButton from "../components/IconButton";
import DiaryPost from "../components/DiaryPost";
import ErrorDisplay from "../components/ErrorDisplay";

const IndexScreen = ({ navigation }) => {
  const { state, getDiaryPosts } = useContext(Context);

  useEffect(() => {
    getDiaryPosts();

    const listener = navigation.addListener("didFocus", () => {
      getDiaryPosts();
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View style={styles.background}>
      <AppTitle />
      <FlatList
        data={state.posts}
        keyExtractor={(post) => post.id}
        renderItem={({ item }) => (
          <DiaryPost item={item} navigation={navigation} />
        )}
      />
      <IconButton
        icon="add"
        color="#6e6d64"
        onPress={() => navigation.navigate("Create")}></IconButton>
    </View>
  );
};

// TODO: Remove this
IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate("Create")}></TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#e6ddd0",
    height: "100%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#666",
  },
  title: {
    fontSize: 18,
  },
});

export default IndexScreen;
