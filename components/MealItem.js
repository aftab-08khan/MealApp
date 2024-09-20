import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function MealItem({ title, imageUrl, duration, affordability, complexity }) {
  return (
    <View>
      <Pressable>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.mealImage} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View>
          <Text>{duration}</Text>
          <Text>{affordability.toUpperCase()}</Text>
          <Text>{complexity.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;
const styles = StyleSheet.create({
  mealImage: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
