import React from "react";
import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoriesGrid from "../components/CategoriesGrid";
function renderListItem(itemData) {
  return (
    <CategoriesGrid title={itemData.item.title} color={itemData.item.color} />
  );
}
function Categories() {
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
