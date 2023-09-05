import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

const GoalList = (props) => {
  const { goals, onDeleteGoal } = props;
  return (
    <View style={styles.goalsContainer}>
      {/* <Text style={styles.title}>List of goals:</Text> */}
      <FlatList
        data={goals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <View style={styles.goalItem}>
            <Pressable
              android_ripple={{ color: "#210644" }} //android
              // style={(pressData) => pressData.pressed}
              style={({ pressed }) => pressed && styles.pressedItem}
              onPress={onDeleteGoal.bind(this, itemData.item.id)}
            >
              <Text style={styles.goalText}>{itemData.item.value}</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 3,
  },
  title: {
    fontSize: 24,
    marginTop: 20,
  },
  goalItem: {
    padding: 10,
    marginVertical: 5,
    borderColor: "#e4d0ff",
    color: "#120438",
    backgroundColor: "#e4d0ff",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
  },
  goalText: {
    // color: "#fff",
  },
});

export default GoalList;
