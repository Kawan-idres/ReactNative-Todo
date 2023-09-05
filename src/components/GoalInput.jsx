import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image,
} from "react-native";

const GoalInput = (props) => {
  const { onAddGoal, isModalOpen, modalHandler } = props;
  const [enteredGoal, setEnteredGoal] = useState("");

  const handleInputChange = (text) => {
    setEnteredGoal(text);
  };

  const handleAddGoal = () => {
    if (enteredGoal.trim() === "") {
      return;
    }
    onAddGoal(enteredGoal);
    setEnteredGoal("");
    modalHandler();
  };

  return (
    <Modal visible={isModalOpen} animationType="fade">
      <View style={styles.inputContainer}>
        <Image
          source={require("../../assets/goal.png")} // Replace with your image source
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal!"
          value={enteredGoal}
          onChangeText={handleInputChange}
        />
        <View style={styles.buttons}>
          <Button title="Cancel" onPress={modalHandler} color="#f31282" />
          <Button title="Add Goal" onPress={handleAddGoal} color="#5e0acc" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center", // Change to "center"
    alignItems: "center",
    gap: 20,
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100, // Set the width of the image as needed
    height: 100, // Set the height of the image as needed
    marginBottom: 16, // Add some margin between the image and the text input
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    color: "#120438",
    backgroundColor: "#e4d0ff",
    width: "100%",
    padding: 16,
    borderRadius: 5,
  },
  buttons: {
    flexDirection: "row",
    gap: 10,
  },
});

export default GoalInput;
