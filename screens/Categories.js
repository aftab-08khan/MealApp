import React from "react";
import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoriesGrid from "../components/CategoriesGrid";

function Categories({ navigation }) {
  function renderListItem(itemData) {
    function handleNavigation() {
      navigation.navigate("MealsOverview", { categoryId: itemData.item.id });
    }
    return (
      <CategoriesGrid
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={handleNavigation}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderListItem}
      numColumns={2}
    />
  );
}

export default Categories;
