import React from "react";
import PropTypes from "prop-types";
import { View, Image, Text } from "react-native";
import recipeListStyles from "styles/RecipeList";

const BASE_URL = "https://spoonacular.com/recipeImages";

export default function RecipeCard({ recipeImage, recipeName }: any) {
    return (
        <View style={recipeListStyles.card}>
            <Image style={recipeListStyles.cardImage} source={{uri: `${BASE_URL}/${recipeImage}`}}/>
            <Text style={recipeListStyles.cardTitle}>{recipeName}</Text>
        </View>
    );
}

RecipeCard.propTypes = {
    recipeImage: PropTypes.string.isRequired,
    recipeName: PropTypes.string.isRequired
};
