import React, { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalList from "./components/GoalList";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //testttttttttttt
  const addGoalHandler = (goalTitle) => {
    setGoals((prevGoals) => [
      ...prevGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
  };

  const deleteGoalHandler = (id) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  const startAddGoalHandler = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <GoalInput
          isModalOpen={isModalOpen}
          modalHandler={startAddGoalHandler}
          onAddGoal={addGoalHandler}
        />
        <GoalList onDeleteGoal={deleteGoalHandler} goals={goals} />
        <View style={styles.addButtonContainer}>
          <Button
            title="Add Goal"
            color={"#5e0acc"}
            onPress={startAddGoalHandler}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 75,
    paddingHorizontal: 16,
  },
  addButtonContainer: {
    position: "absolute",
    bottom: 50, // Adjust this value as needed
    left: 16, // Adjust this value as needed
    right: 16, // Adjust this value as needed
  },
});
