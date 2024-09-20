import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

function CategoriesGrid({ title, color, onPress }) {
  // const navigation = useNavigation();

  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={"#ccc"}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoriesGrid;
const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 20,
    height: 150,
    borderRadius: 12,
    overflow: Platform.OS ? "visible" : "hidden",
    elevation: 6,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 6,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
