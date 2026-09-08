import React from "react";
import { useSelector } from "react-redux";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function FavoriteScreen() {
  const navigation = useNavigation();

  const favoriteRecipes = useSelector((state) => state.favorites);
  const favoriteRecipesList = favoriteRecipes?.favoriterecipes || [];

  if (favoriteRecipesList.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No favorite recipes yet!</Text>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>Go back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation.navigate("RecipeDetail", item)}
      activeOpacity={0.8}
    >
      <Image
        source={{ uri: item.recipeImage }}
        style={styles.recipeImage}
        resizeMode="cover"
      />

      <Text style={styles.recipeTitle} numberOfLines={1}>
        {item.recipeName?.length > 20
          ? `${item.recipeName.substring(0, 20)}...`
          : item.recipeName}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View testID="FavoriteRecipes">
        <Text style={styles.heading}>My Favorite Recipes</Text>
      </View>

      <TouchableOpacity
        testID="favoriteRecipes"
        onPress={() => navigation.goBack()}
        style={styles.backButton}
        activeOpacity={0.8}
      >
        <Text style={styles.backButtonText}>Go back</Text>
      </TouchableOpacity>

      <FlatList
        data={favoriteRecipesList}
        contentContainerStyle={styles.listContentContainer}
        keyExtractor={(item) => item.idFood.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  emptyText: {
    fontSize: hp(2.5),
    color: "#6B7280",
  },

  heading: {
    fontSize: hp(3.8),
    marginTop: hp(4),
    marginLeft: wp(5),
    fontWeight: "600",
    color: "#52525B",
  },

  backButton: {
    backgroundColor: "#2563EB",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginLeft: wp(5),
    width: 100,
    alignItems: "center",
  },

  backButtonText: {
    color: "#fff",
    fontSize: hp(1.8),
  },

  listContentContainer: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
  },

  cardContainer: {
    backgroundColor: "white",
    marginBottom: hp(2),
    padding: wp(4),
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },

  recipeImage: {
    width: wp(20),
    height: wp(20),
    borderRadius: 10,
    marginRight: wp(4),
  },

  recipeTitle: {
    fontSize: hp(2),
    fontWeight: "bold",
    color: "#4B5563",
    flex: 1,
  },
});