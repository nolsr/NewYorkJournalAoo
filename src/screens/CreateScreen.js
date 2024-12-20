import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import PostForm from "../components/PostForm";
import { Context } from "../context/DiaryContext";

const CreateScreen = ({ navigation }) => {
  const { addDiaryPost } = useContext(Context);

  return (
    <PostForm
      onSubmit={(title, content, date, image) => {
        addDiaryPost(title, content, date, image, () =>
          navigation.navigate("Index")
        );
      }}
      onBack={() => navigation.navigate("Index")}
      navigation={navigation}
    />
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
