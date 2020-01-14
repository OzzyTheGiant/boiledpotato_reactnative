import React from "react";
import { View, Image, Text } from "react-native";
import recipeListStyles from "styles/RecipeList";

export default function RecipeCard() {
    return (
        <View style={recipeListStyles.card}>
            <Image style={recipeListStyles.cardImage} source={{uri: ""}}/>
            <Text style={recipeListStyles.cardTitle}>Sample Recipe</Text>
        </View>
    );
}
