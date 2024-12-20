import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import PostForm from "../components/PostForm";
import { Context } from "../context/DiaryContext";

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state, editDiaryPost } = useContext(Context);
  const post = state.posts.find(
    (diaryPost) => diaryPost.id === navigation.getParam("id")
  );

  return (
    <PostForm
      inititalValues={{
        title: post.title,
        content: post.content,
        date: post.date,
        image: post.image,
      }}
      navigation={navigation}
      onSubmit={(title, content, date, image) => {
        editDiaryPost(id, title, content, date, image, () =>
          navigation.navigate("View", { id: id })
        );
      }}
      onBack={() => navigation.navigate("View", { id: id })}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
