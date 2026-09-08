import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../redux/favoritesSlice";

export default function RecipeDetailScreen(props) {
  const recipe = props.route.params;

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const favoriterecipes = useSelector(
    (state) => state.favorites.favoriterecipes
  );

  const isFavourite = favoriterecipes?.some(
    (favrecipe) => favrecipe.idFood === recipe.idFood
  );

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(recipe));
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
      {/* Recipe Image */}
      <View
        style={styles.imageContainer}
        testID="imageContainer"
      >
        <Image
          source={{ uri: recipe.recipeImage }}
          style={styles.recipeImage}
          resizeMode="cover"
        />
      </View>

      {/* Back Button and Favorite Button */}
      <View style={styles.topButtonsContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
          activeOpacity={0.8}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleToggleFavorite}
          style={styles.favoriteButton}
          activeOpacity={0.8}
        >
          <Text style={styles.favoriteButtonText}>
            {isFavourite ? "♥" : "♡"}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        {/* Recipe Title and Category */}
        <View
          style={styles.recipeDetailsContainer}
          testID="recipeDetailsContainer"
        >
          <Text
            style={styles.recipeTitle}
            testID="recipeTitle"
          >
            {recipe.recipeName}
          </Text>

          <Text
            style={styles.recipeCategory}
            testID="recipeCategory"
          >
            {recipe.recipeCategory || recipe.category}
          </Text>
        </View>

        {/* Recipe Miscellaneous Information */}
        <View
          style={styles.miscContainer}
          testID="miscContainer"
        >
          <View style={styles.miscItem}>
            <Text style={styles.miscIcon}>🕒</Text>
            <Text style={styles.miscText}>35 Mins</Text>
          </View>

          <View style={styles.miscItem}>
            <Text style={styles.miscIcon}>👥</Text>
            <Text style={styles.miscText}>03 Servings</Text>
          </View>

          <View style={styles.miscItem}>
            <Text style={styles.miscIcon}>🔥</Text>
            <Text style={styles.miscText}>103 Cal</Text>
          </View>

          <View style={styles.miscItem}>
            <Text style={styles.miscIcon}>🎚️</Text>
            <Text style={styles.miscText}>Medium</Text>
          </View>
        </View>

        {/* Ingredients */}
        <View
          style={styles.sectionContainer}
          testID="sectionContainer"
        >
          <Text style={styles.sectionTitle}>
            Ingredients
          </Text>

          <View
            style={styles.ingredientsList}
            testID="ingredientsList"
          >
            {recipe.ingredients?.map((ingredient, index) => (
              <View
                style={styles.ingredientItem}
                key={`${ingredient.ingredientName}-${index}`}
              >
                <View style={styles.ingredientBullet} />

                <Text style={styles.ingredientText}>
                  {ingredient.ingredientName}{" "}
                  {ingredient.measure}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Instructions */}
        <View
          style={styles.sectionContainer}
          testID="sectionContainer"
        >
          <Text style={styles.sectionTitle}>
            Instructions
          </Text>

          <Text style={styles.instructionsText}>
            {recipe.recipeInstructions}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },

  scrollContent: {
    paddingBottom: 30,
  },

  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },

  recipeImage: {
    width: wp(98),
    height: hp(45),
    borderRadius: 20,
    marginTop: 4,
  },

  topButtonsContainer: {
    width: "100%",
    position: "absolute",
    top: hp(4),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  backButton: {
    width: hp(5),
    height: hp(5),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginLeft: wp(5),
    backgroundColor: "white",
    elevation: 3,
  },

  backButtonText: {
    fontSize: hp(2.8),
    color: "#333",
    fontWeight: "bold",
  },

  favoriteButton: {
    width: hp(5),
    height: hp(5),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginRight: wp(5),
    backgroundColor: "white",
    elevation: 3,
  },

  favoriteButtonText: {
    fontSize: hp(2.8),
    color: "red",
  },

  contentContainer: {
    paddingHorizontal: wp(4),
    paddingTop: hp(1),
  },

  recipeDetailsContainer: {
    marginBottom: hp(2),
  },

  recipeTitle: {
    fontSize: hp(3),
    fontWeight: "bold",
    color: "#4B5563",
  },

  recipeCategory: {
    fontSize: hp(2),
    fontWeight: "500",
    color: "#9CA3AF",
    marginTop: hp(0.5),
  },

  miscContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: hp(3),
    paddingHorizontal: wp(1),
  },

  miscItem: {
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 10,
    elevation: 3,
    minWidth: wp(20),
  },

  miscIcon: {
    fontSize: hp(2.5),
    marginBottom: 5,
  },

  miscText: {
    fontSize: hp(1.4),
    fontWeight: "600",
    color: "#444",
  },

  sectionContainer: {
    marginHorizontal: wp(1),
    marginBottom: hp(2.5),
  },

  sectionTitle: {
    fontSize: hp(2.8),
    fontWeight: "bold",
    color: "#333",
    marginBottom: hp(1.2),
  },

  ingredientsList: {
    marginLeft: wp(1),
  },

  ingredientItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp(1),
    padding: 10,
    backgroundColor: "#FFF9E1",
    borderRadius: 8,
    elevation: 2,
  },

  ingredientBullet: {
    backgroundColor: "#FFD700",
    borderRadius: 50,
    height: hp(1.5),
    width: hp(1.5),
    marginRight: wp(2),
  },

  ingredientText: {
    flex: 1,
    fontSize: hp(1.9),
    color: "#333",
  },

  instructionsText: {
    fontSize: hp(2),
    color: "#444",
    lineHeight: hp(3),
    textAlign: "justify",
  },
});