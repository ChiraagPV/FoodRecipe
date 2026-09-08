import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Categories from "../components/categories";
import FoodItems from "../components/recipes";

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState("Chicken");

  const [categories, setCategories] = useState([
    {
      idCategory: "1",
      strCategory: "Beef",
      strCategoryThumb:
        "https://www.themealdb.com/images/category/beef.png",
    },
    {
      idCategory: "2",
      strCategory: "Chicken",
      strCategoryThumb:
        "https://www.themealdb.com/images/category/chicken.png",
    },
    {
      idCategory: "3",
      strCategory: "Dessert",
      strCategoryThumb:
        "https://www.themealdb.com/images/category/dessert.png",
    },
    {
      idCategory: "4",
      strCategory: "Lamb",
      strCategoryThumb:
        "https://www.themealdb.com/images/category/lamb.png",
    },
    {
      idCategory: "5",
      strCategory: "Miscellaneous",
      strCategoryThumb:
        "https://www.themealdb.com/images/category/miscellaneous.png",
    },
    {
      idCategory: "6",
      strCategory: "Pasta",
      strCategoryThumb:
        "https://www.themealdb.com/images/category/pasta.png",
    },
    {
      idCategory: "7",
      strCategory: "Pork",
      strCategoryThumb:
        "https://www.themealdb.com/images/category/pork.png",
    },
    {
      idCategory: "8",
      strCategory: "Seafood",
      strCategoryThumb:
        "https://www.themealdb.com/images/category/seafood.png",
    },
    {
      idCategory: "9",
      strCategory: "Side",
      strCategoryThumb:
        "https://www.themealdb.com/images/category/side.png",
    },
    {
      idCategory: "10",
      strCategory: "Starter",
      strCategoryThumb:
        "https://www.themealdb.com/images/category/starter.png",
    },
    {
      idCategory: "11",
      strCategory: "Vegan",
      strCategoryThumb:
        "https://www.themealdb.com/images/category/vegan.png",
    },
    {
      idCategory: "12",
      strCategory: "Vegetarian",
      strCategoryThumb:
        "https://www.themealdb.com/images/category/vegetarian.png",
    },
    {
      idCategory: "13",
      strCategory: "Breakfast",
      strCategoryThumb:
        "https://www.themealdb.com/images/category/breakfast.png",
    },
    {
      idCategory: "14",
      strCategory: "Goat",
      strCategoryThumb:
        "https://images.unsplash.com/photo-1619711667542-c049700dd9e0?q=80&w=1888&auto=format&fit=crop",
    },
  ]);

  const [allFood, setAllFood] = useState([
    {
      category: "Beef",
      idFood: "1",
      idCategory: "1",
      recipeName: "Beef and Mustard Pie",
      recipeInstructions:
        "Preheat the oven to 150C/300F/Gas 2.\r\nToss the beef and flour together in a bowl with some salt and black pepper.\r\nHeat a large casserole until hot, add half of the rapeseed oil and enough of the beef to just cover the bottom of the casserole.\r\nFry until browned on each side, then remove and set aside. Repeat with the remaining oil and beef.\r\nReturn the beef to the pan, add the wine and cook until the volume of liquid has reduced by half, then add the stock, onion, carrots, thyme and mustard, and season well with salt and pepper.\r\nCover with a lid and place in the oven for two hours.\r\nRemove from the oven, check the seasoning and set aside to cool. Remove the thyme.\r\nWhen the beef is cool and you're ready to assemble the pie, preheat the oven to 200C/400F/Gas 6.\r\nTransfer the beef to a pie dish, brush the rim with the beaten egg yolks and lay the pastry over the top. Brush the top of the pastry with more beaten egg.\r\nTrim the pastry so there is just enough excess to crimp the edges, then place in the oven and bake for 30 minutes, or until the pastry is golden-brown and cooked through.\r\nFor the green beans, bring a saucepan of salted water to the boil, add the beans and cook for 4-5 minutes, or until just tender.\r\nDrain and toss with the butter, then season with black pepper.\r\nTo serve, place a large spoonful of pie onto each plate with some green beans alongside.",
      recipeImage:
        "https://images.unsplash.com/photo-1587248720327-8eb72564be1e?q=80&w=1887&auto=format&fit=crop",
      recipeId: "beef_01",
      alternateDrink: null,
      recipeCategory: "Beef",
      recipeOrigin: "British",
      cookingDescription:
        "Preheat the oven to 150C/300F/Gas 2. Toss the beef and flour together in a bowl with some salt and black pepper...",
      recipeTags: "Meat,Pie",
      ingredients: [
        { ingredientName: "Beef", measure: "1kg" },
        { ingredientName: "Plain Flour", measure: "2 tbs" },
        { ingredientName: "Rapeseed Oil", measure: "2 tbs" },
        { ingredientName: "Red Wine", measure: "200ml" },
        { ingredientName: "Beef Stock", measure: "400ml" },
        { ingredientName: "Onion", measure: "1 finely sliced" },
        { ingredientName: "Carrots", measure: "2 chopped" },
        { ingredientName: "Thyme", measure: "3 sprigs" },
        { ingredientName: "Mustard", measure: "2 tbs" },
        { ingredientName: "Egg Yolks", measure: "2 free-range" },
        { ingredientName: "Puff Pastry", measure: "400g" },
        { ingredientName: "Green Beans", measure: "300g" },
        { ingredientName: "Butter", measure: "25g" },
        { ingredientName: "Salt", measure: "pinch" },
        { ingredientName: "Pepper", measure: "pinch" },
      ],
    },

    {
      category: "Beef",
      idFood: "2",
      idCategory: "1",
      recipeName:
        "Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber",
      recipeInstructions:
        "Place rice in a fine-mesh sieve and rinse until water runs clear. Add to a small pot with 1 cup water and a pinch of salt. Bring to a boil, cover and reduce heat to low. Cook until rice is tender. Meanwhile, prepare garlic, lime, cucumber, onion and carrot. Combine cucumber with lime juice, sugar and salt. Combine mayonnaise, garlic, lime juice and sriracha. Cook the beef with onion and garlic until browned. Stir in soy sauce. Serve beef with rice, carrot, pickled cucumber and sriracha mayo.",
      recipeImage:
        "https://images.unsplash.com/photo-1676300185292-e23bb3db50fa?q=80&w=2070&auto=format&fit=crop",
      recipeId: "beef_02",
      alternateDrink: null,
      recipeCategory: "Beef",
      recipeOrigin: "Vietnamese",
      cookingDescription:
        "Cook seasoned beef and serve with rice, carrot, pickled cucumber and sriracha mayo.",
      recipeTags: "Rice,Bowl",
      ingredients: [
        { ingredientName: "Ground Beef", measure: "500g" },
        { ingredientName: "Rice", measure: "200g" },
        { ingredientName: "Cucumber", measure: "1 sliced" },
        { ingredientName: "Carrot", measure: "1 grated" },
        { ingredientName: "Sriracha", measure: "2 tbs" },
        { ingredientName: "Mayonnaise", measure: "3 tbs" },
        { ingredientName: "Soy Sauce", measure: "2 tbs" },
        { ingredientName: "Lime", measure: "1 juiced" },
        { ingredientName: "Brown Sugar", measure: "1 tbs" },
        { ingredientName: "Vinegar", measure: "2 tbs" },
      ],
    },

    {
      category: "Beef",
      idFood: "3",
      idCategory: "1",
      recipeName: "Beef Brisket Pot Roast",
      recipeInstructions:
        "Preheat the oven to 160°C (320°F) and season a 1.5kg beef brisket with salt, pepper, garlic powder and onion powder. Sear the brisket on all sides. Sauté onions, carrots and garlic. Add red wine and beef stock, then return the brisket to the pot. Cover and cook for 3-4 hours until tender.",
      recipeImage:
        "https://images.unsplash.com/photo-1622003184404-bc0c66144534?q=80&w=1887&auto=format&fit=crop",
      recipeId: "beef_03",
      alternateDrink: null,
      recipeCategory: "Beef",
      recipeOrigin: "American",
      cookingDescription:
        "Slow-cook seasoned beef brisket with vegetables, wine and beef stock.",
      recipeTags: "Roast,Pot",
      ingredients: [
        { ingredientName: "Beef Brisket", measure: "1.5kg" },
        { ingredientName: "Salt", measure: "2 tsp" },
        { ingredientName: "Pepper", measure: "1 tsp" },
        { ingredientName: "Garlic Powder", measure: "1 tsp" },
        { ingredientName: "Onion Powder", measure: "1 tsp" },
        { ingredientName: "Olive Oil", measure: "2 tbs" },
        { ingredientName: "Onions", measure: "2 chopped" },
        { ingredientName: "Carrots", measure: "4 chopped" },
        { ingredientName: "Garlic", measure: "3 cloves minced" },
        { ingredientName: "Beef Stock", measure: "500ml" },
        { ingredientName: "Red Wine", measure: "250ml" },
        { ingredientName: "Thyme", measure: "3 sprigs" },
      ],
    },

    {
      category: "Beef",
      idFood: "4",
      idCategory: "1",
      recipeName: "Beef Bourguignon",
      recipeInstructions:
        "Heat a large casserole pan and brown the beef. Fry bacon, shallots, mushrooms, garlic and herbs. Add tomato purée, return the beef and add wine and water. Cook in the oven at 150C for 3 hours until tender. Serve with celeriac mash.",
      recipeImage:
        "https://images.unsplash.com/photo-1548869206-93b036288d7e?q=80&w=1895&auto=format&fit=crop",
      recipeId: "beef_04",
      alternateDrink: null,
      recipeCategory: "Beef",
      recipeOrigin: "French",
      cookingDescription:
        "Slow-cooked French beef stew with wine, vegetables and herbs.",
      recipeTags: "Stew,Meat",
      ingredients: [
        { ingredientName: "Beef Chuck", measure: "1kg" },
        { ingredientName: "Onions", measure: "2 sliced" },
        { ingredientName: "Carrots", measure: "3 chopped" },
        { ingredientName: "Garlic", measure: "4 cloves minced" },
        { ingredientName: "Bacon", measure: "150g chopped" },
        { ingredientName: "Red Wine", measure: "500ml" },
        { ingredientName: "Beef Stock", measure: "500ml" },
        { ingredientName: "Thyme", measure: "2 sprigs" },
        { ingredientName: "Mushrooms", measure: "200g sliced" },
        { ingredientName: "Butter", measure: "50g" },
        { ingredientName: "Salt", measure: "pinch" },
        { ingredientName: "Pepper", measure: "pinch" },
      ],
    },

    {
      category: "Beef",
      idFood: "5",
      idCategory: "1",
      recipeName: "Beef Stroganoff",
      recipeInstructions:
        "Season thinly sliced beef with salt and pepper and coat with flour. Sear the beef in oil and butter. Sauté onions, garlic and mushrooms. Add beef stock and sour cream, then return the beef and simmer until the sauce thickens.",
      recipeImage:
        "https://images.unsplash.com/photo-1726677730666-fdc08a8da464?q=80&w=1887&auto=format&fit=crop",
      recipeId: "beef_05",
      alternateDrink: null,
      recipeCategory: "Beef",
      recipeOrigin: "Russian",
      cookingDescription:
        "Creamy beef stroganoff with mushrooms, onions and sour cream.",
      recipeTags: "Creamy,Meat",
      ingredients: [
        { ingredientName: "Beef Sirloin", measure: "500g" },
        { ingredientName: "Onions", measure: "1 chopped" },
        { ingredientName: "Garlic", measure: "2 cloves minced" },
        { ingredientName: "Mushrooms", measure: "200g sliced" },
        { ingredientName: "Sour Cream", measure: "150g" },
        { ingredientName: "Dijon Mustard", measure: "1 tbs" },
        { ingredientName: "Beef Stock", measure: "200ml" },
        { ingredientName: "Butter", measure: "2 tbs" },
        { ingredientName: "Salt", measure: "pinch" },
        { ingredientName: "Pepper", measure: "pinch" },
      ],
    },

    {
      category: "Beef",
      idFood: "6",
      idCategory: "1",
      recipeName: "Beef Tacos",
      recipeInstructions:
        "Cook ground beef in a skillet until browned. Add taco seasoning and simmer. Warm taco shells and fill them with beef. Top with lettuce, tomatoes, cheese, sour cream, salsa and guacamole.",
      recipeImage:
        "https://images.unsplash.com/photo-1619221882161-95135fca04e4?q=80&w=2070&auto=format&fit=crop",
      recipeId: "beef_06",
      alternateDrink: null,
      recipeCategory: "Beef",
      recipeOrigin: "Mexican",
      cookingDescription:
        "Seasoned ground beef served in taco shells with fresh toppings.",
      recipeTags: "Mexican,Taco",
      ingredients: [
        { ingredientName: "Ground Beef", measure: "500g" },
        { ingredientName: "Onions", measure: "1 chopped" },
        { ingredientName: "Garlic", measure: "2 cloves minced" },
        { ingredientName: "Cumin", measure: "1 tsp" },
        { ingredientName: "Chili Powder", measure: "1 tsp" },
        { ingredientName: "Tomatoes", measure: "2 chopped" },
        { ingredientName: "Lettuce", measure: "100g shredded" },
        { ingredientName: "Cheese", measure: "100g grated" },
        { ingredientName: "Sour Cream", measure: "100g" },
        { ingredientName: "Tortillas", measure: "6 small" },
      ],
    },

    {
      category: "Chicken",
      idFood: "7",
      idCategory: "2",
      recipeName: "Chicken Curry",
      recipeInstructions:
        "Heat oil and sauté onion. Add garlic, ginger and spices. Add chicken and brown. Pour in coconut milk and chicken stock. Simmer until the chicken is tender. Garnish with cilantro and serve with rice or naan.",
      recipeImage:
        "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2070&auto=format&fit=crop",
      recipeId: "chicken_01",
      recipeCategory: "Chicken",
      recipeOrigin: "Indian",
      cookingDescription:
        "Cook chicken with spices, coconut milk and aromatics until tender.",
      recipeTags: "Spicy,Curry",
      ingredients: [
        { ingredientName: "Chicken", measure: "500g" },
        { ingredientName: "Onions", measure: "2 chopped" },
        { ingredientName: "Tomatoes", measure: "3 chopped" },
        { ingredientName: "Cumin", measure: "1 tsp" },
        { ingredientName: "Turmeric", measure: "1 tsp" },
      ],
    },

    {
      category: "Chicken",
      idFood: "8",
      idCategory: "2",
      recipeName: "Chicken Alfredo",
      recipeInstructions:
        "Season and cook chicken breasts until golden and cooked through. Make Alfredo sauce with butter, garlic, cream and Parmesan. Cook fettuccine and toss with the sauce. Add sliced chicken and garnish with parsley.",
      recipeImage:
        "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=2070&auto=format&fit=crop",
      recipeId: "chicken_02",
      recipeCategory: "Chicken",
      recipeOrigin: "Italian",
      cookingDescription:
        "Creamy Alfredo pasta topped with sliced chicken.",
      recipeTags: "Pasta,Creamy",
      ingredients: [
        { ingredientName: "Chicken", measure: "400g" },
        { ingredientName: "Cream", measure: "200ml" },
        { ingredientName: "Parmesan", measure: "100g grated" },
      ],
    },

    {
      category: "Chicken",
      idFood: "9",
      idCategory: "2",
      recipeName: "Chicken Parmesan",
      recipeInstructions:
        "Season chicken breasts and coat them in flour, egg and breadcrumbs mixed with Parmesan. Fry until golden. Top with marinara sauce and mozzarella, then bake until the cheese melts.",
      recipeImage:
        "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?q=80&w=2070&auto=format&fit=crop",
      recipeId: "chicken_03",
      recipeCategory: "Chicken",
      recipeOrigin: "Italian",
      cookingDescription:
        "Breaded chicken topped with marinara sauce and melted mozzarella.",
      recipeTags: "Breaded,Cheesy",
      ingredients: [
        { ingredientName: "Chicken Cutlets", measure: "4 pieces" },
        { ingredientName: "Marinara Sauce", measure: "1 cup" },
        { ingredientName: "Mozzarella Cheese", measure: "1 cup shredded" },
      ],
    },

    {
      category: "Chicken",
      idFood: "10",
      idCategory: "2",
      recipeName: "Chicken Teriyaki",
      recipeInstructions:
        "Cook sliced chicken until browned. Combine soy sauce, honey, rice vinegar, sesame oil, cornstarch and garlic. Pour the sauce over the chicken and simmer until thickened. Serve with rice.",
      recipeImage:
        "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=2070&auto=format&fit=crop",
      recipeId: "chicken_04",
      recipeCategory: "Chicken",
      recipeOrigin: "Japanese",
      cookingDescription:
        "Chicken cooked in a sweet and savory teriyaki sauce.",
      recipeTags: "Grilled,Asian",
      ingredients: [
        { ingredientName: "Chicken", measure: "500g" },
        { ingredientName: "Teriyaki Sauce", measure: "1/2 cup" },
      ],
    },

    {
      category: "Chicken",
      idFood: "11",
      idCategory: "2",
      recipeName: "Chicken Fajitas",
      recipeInstructions:
        "Cook seasoned chicken strips until browned. Sauté sliced onion and bell peppers. Return the chicken to the pan and combine. Serve with warm tortillas and toppings.",
      recipeImage:
        "https://images.unsplash.com/photo-1689773976415-293dd893f77e?q=80&w=1974&auto=format&fit=crop",
      recipeId: "chicken_05",
      recipeCategory: "Chicken",
      recipeOrigin: "Mexican",
      cookingDescription:
        "Chicken strips cooked with peppers and onions and served in tortillas.",
      recipeTags: "Mexican,Spicy",
      ingredients: [
        { ingredientName: "Chicken", measure: "500g" },
        { ingredientName: "Bell Peppers", measure: "2 sliced" },
        { ingredientName: "Onions", measure: "1 sliced" },
      ],
    },

    {
      category: "Chicken",
      idFood: "12",
      idCategory: "2",
      recipeName: "Chicken Caesar Salad",
      recipeInstructions:
        "Grill or pan-sear chicken breasts. Combine chopped romaine lettuce, sliced chicken and Parmesan. Add Caesar dressing and top with croutons.",
      recipeImage:
        "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=1887&auto=format&fit=crop",
      recipeId: "chicken_06",
      recipeCategory: "Chicken",
      recipeOrigin: "American",
      cookingDescription:
        "Grilled chicken served with romaine lettuce, Parmesan and Caesar dressing.",
      recipeTags: "Salad,Healthy",
      ingredients: [
        { ingredientName: "Chicken Breast", measure: "2 grilled" },
        { ingredientName: "Romaine Lettuce", measure: "1 head chopped" },
        { ingredientName: "Croutons", measure: "1 cup" },
        { ingredientName: "Caesar Dressing", measure: "1/4 cup" },
      ],
    },

    {
      category: "Chicken",
      idFood: "13",
      idCategory: "2",
      recipeName: "Buffalo Chicken Wings",
      recipeInstructions:
        "Season chicken wings and bake until crispy. Toss the wings in Buffalo sauce made with butter and hot sauce. Serve with celery and dipping sauce.",
      recipeImage:
        "https://images.unsplash.com/photo-1608039755401-742074f0548d?q=80&w=1935&auto=format&fit=crop",
      recipeId: "chicken_07",
      recipeCategory: "Chicken",
      recipeOrigin: "American",
      cookingDescription:
        "Crispy chicken wings tossed in spicy Buffalo sauce.",
      recipeTags: "Spicy,Fried",
      ingredients: [
        { ingredientName: "Chicken Wings", measure: "12 pieces" },
        { ingredientName: "Buffalo Sauce", measure: "1/2 cup" },
      ],
    },

    {
      category: "Chicken",
      idFood: "14",
      idCategory: "2",
      recipeName: "Chicken and Rice",
      recipeInstructions:
        "Brown seasoned chicken thighs. Sauté onion and garlic, then toast the rice. Add chicken broth and chicken, cover and simmer until the rice is tender and chicken is cooked through.",
      recipeImage:
        "https://images.unsplash.com/photo-1617651523904-8768096faf40?q=80&w=1887&auto=format&fit=crop",
      recipeId: "chicken_08",
      recipeCategory: "Chicken",
      recipeOrigin: "American",
      cookingDescription:
        "One-pot chicken and rice with herbs and seasonings.",
      recipeTags: "Comfort Food,One-Pot",
      ingredients: [
        { ingredientName: "Chicken", measure: "500g" },
        { ingredientName: "Rice", measure: "1 cup" },
        { ingredientName: "Chicken Broth", measure: "2 cups" },
      ],
    },
  ]);

  const handleChangeCategory = (category) => {
    setActiveCategory(category);
  };

  const filteredfoods = allFood.filter(
    (food) => food.category === activeCategory
  );

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        testID="scrollContainer"
      >
        <View style={styles.headerContainer} testID="headerContainer">
          <Image
            source={{
              uri: "https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_1280.png",
            }}
            style={styles.avatar}
          />

          <Text style={styles.greetingText}>Hello, User!</Text>
        </View>

        <View style={styles.titleContainer} testID="titleContainer">
          <Text style={styles.title}>Make your own food,</Text>

          <Text style={styles.subtitle}>
            stay at <Text style={styles.highlight}>home</Text>
          </Text>
        </View>

        <View testID="categoryList">
          <Categories
            categories={categories}
            activeCategory={activeCategory}
            handleChangeCategory={handleChangeCategory}
          />
        </View>

        <View testID="foodList">
          <FoodItems foods={filteredfoods} categories={categories} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  scrollContainer: {
    paddingBottom: 50,
    paddingTop: hp(14),
  },

  headerContainer: {
    marginHorizontal: wp(4),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: hp(2),
    marginTop: hp(-8.5),
  },

  avatar: {
    height: hp(5),
    width: hp(5.5),
  },

  greetingText: {
    fontSize: hp(1.7),
    color: "#52525Z",
    fontWeight: "600",
    backgroundColor: "#F3F4F6",
    paddingHorizontal: wp(2),
    paddingVertical: hp(0.5),
    borderRadius: 9999,
    textAlign: "center",
  },

  titleContainer: {
    marginHorizontal: wp(4),
    marginBottom: hp(2),
  },

  title: {
    fontSize: hp(3.8),
    fontWeight: "600",
    color: "#52525B",
  },

  subtitle: {
    fontSize: hp(3.8),
    fontWeight: "600",
    color: "#52525B",
  },

  highlight: {
    color: "#F59E0B",
  },
});