import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  import { useNavigation } from "@react-navigation/native";
  
  export default function Recipe({ categories, foods }) {
    const navigation = useNavigation();
  
    const renderItem = ({ item, index }) => (
      <ArticleCard
        item={item}
        index={index}
        navigation={navigation}
      />
    );
  
    return (
      <View style={styles.container}>
        <View testID="recipesDisplay">
          <FlatList
            data={foods}
            numColumns={2}
            keyExtractor={(item) => item.idFood.toString()}
            renderItem={renderItem}
            columnWrapperStyle={styles.row}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }
  
  const ArticleCard = ({ item, index, navigation }) => {
    const handlePress = () => {
      navigation.navigate("RecipeDetail", item);
    };
  
    return (
      <View
        style={[
          styles.cardContainer,
          {
            paddingLeft: index % 2 === 0 ? 0 : wp(2),
            paddingRight: index % 2 === 0 ? wp(2) : 0,
          },
        ]}
        testID="articleDisplay"
      >
        <TouchableOpacity
          onPress={handlePress}
          activeOpacity={0.8}
        >
          <Image
            source={{ uri: item.recipeImage }}
            style={styles.articleImage}
            resizeMode="cover"
          />
  
          <Text
            style={styles.articleText}
            numberOfLines={2}
          >
            {item.recipeName}
          </Text>
  
          <Text
            style={styles.articleDescription}
            numberOfLines={2}
          >
            {item.cookingDescription || item.recipeInstructions}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      marginHorizontal: wp(4),
      marginTop: hp(2),
    },
  
    cardContainer: {
      justifyContent: "center",
      marginBottom: hp(1.5),
      flex: 1,
    },
  
    articleImage: {
      width: "100%",
      height: hp(25),
      borderRadius: 35,
      backgroundColor: "rgba(0, 0, 0, 0.05)",
    },
  
    articleText: {
      fontSize: hp(1.5),
      fontWeight: "600",
      color: "#52525B",
      marginLeft: wp(2),
      marginTop: hp(0.5),
    },
  
    articleDescription: {
      fontSize: hp(1.2),
      color: "#6B7280",
      marginLeft: wp(2),
      marginTop: hp(0.5),
    },
  
    row: {
      justifyContent: "space-between",
    },
  });