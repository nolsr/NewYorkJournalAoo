import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const formatDate = (date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDay = day < 10 ? `0${day}` : day;
  return `${formattedMonth}/${formattedDay}/${year}`;
};

const PostForm = ({
  onSubmit,
  onBack,
  navigation,
  inititalValues = {
    title: "",
    content: "",
    date: formatDate(new Date()),
    image: null,
  },
}) => {
  const [title, setTitle] = useState(inititalValues.title);
  const [content, setContent] = useState(inititalValues.content);
  const [date, setDate] = useState(inititalValues.date);
  const [image, setImage] = useState(inititalValues.image);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    if (!result.canceled) {
      const base64Image = `data:image/jpeg;base64,${result.assets[0].base64}`;
      setImage(base64Image);
    }
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View style={styles.form}>
        <View style={styles.headingContainer} pointerEvents="box-none">
          <TouchableOpacity style={styles.backIcon} onPress={() => onBack()}>
            <MaterialIcons name="chevron-left" size={40} color="white" />
          </TouchableOpacity>

          <Text style={styles.heading}>New Diary Entry</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Title:</Text>
          <TextInput
            autoCapitalize="words"
            autoCorrect={false}
            style={styles.input}
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Content:</Text>
          <TextInput
            autoCorrect={false}
            multiline={true}
            style={styles.input}
            value={content}
            onChangeText={(text) => setContent(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Date</Text>
          <TextInput
            autoCorrect={false}
            style={styles.input}
            value={date}
            onChangeText={(text) => setDate(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Image</Text>
          {image && <Image source={{ uri: image }} style={styles.image} />}
          <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
            <Text style={styles.imageButtonText}>
              {image ? "Change" : "Pick"}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => {
            onSubmit(title, content, date, image);
          }}>
          <Text style={styles.saveButtonText}>Save Post</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    backgroundColor: "#222e35",
    minHeight: "100%",
    paddingTop: 50,
    overflow: "scroll",
  },
  headingContainer: {
    position: "relative",
  },
  backIcon: {
    width: 50,
    height: 50,
    position: "absolute",
    left: 10,
    zIndex: 1000,
  },
  heading: {
    color: "#fff",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  inputContainer: {
    backgroundColor: "#e6ddd0",
    padding: 5,
    margin: 10,
    borderRadius: 15,
  },
  label: {
    fontSize: 15,
    margin: 10,
    marginBottom: 0,
    fontWeight: "bold",
  },
  input: {
    fontSize: 18,
    borderWidth: 0,
    borderBottomWidth: 3,
    borderColor: "#666",
    marginHorizontal: 10,
    marginBottom: 5,
    textAlignVertical: "top",
    width: "calc(100% - 20)",
  },
  image: {
    margin: "3%",
    width: "94%",
    aspectRatio: 1.5,
    borderRadius: 5,
  },
  imageButton: {
    margin: 10,
    backgroundColor: "#222e35",
    padding: 10,
    borderRadius: 15,
  },
  imageButtonText: {
    color: "#fff",
    textAlign: "center",
  },
  saveButton: {
    margin: 10,
    backgroundColor: "#d4ac61",
    padding: 10,
    borderRadius: 15,
  },
  saveButtonText: {
    color: "#222e35",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default PostForm;
