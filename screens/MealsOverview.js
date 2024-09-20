import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverview({ route }) {
  const ctId = route.params.categoryId;
  const displayedMeal = MEALS.filter(
    (mealsData) => mealsData.categoryIds.indexOf(ctId) >= 0
  );
  function renderMeal(itemData) {
    const item = itemData.item;
    const mealsProps = {
      title: item.title,

      imageUrl: item.imageUrl,
    };
    return (
      <MealItem title={itemData.item.title} imageUrl={itemData.item.imageUrl} />
    );
  }
  return (
    <View style={styles.overViewScreen}>
      <FlatList
        data={displayedMeal}
        keyExtractor={(item) => item.id}
        renderItem={renderMeal}
      />
    </View>
  );
}

export default MealsOverview;
const styles = StyleSheet.create({
  overViewScreen: {
    flex: 1,
    padding: 16,
  },
});
