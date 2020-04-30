import React from "react";
import PropTypes from "prop-types";
import { View, Image, Text } from "react-native";
import recipeListStyles from "styles/RecipeList";
import { TouchableOpacity } from "react-native-gesture-handler";

const BASE_URL = "https://spoonacular.com/recipeImages";

export default function RecipeCard({ recipeImage, recipeName, pressAction }: any) {
    return (
        <TouchableOpacity onPress={pressAction}>
            <View style={recipeListStyles.card}>
                <Image style={recipeListStyles.cardImage} source={{uri: `${BASE_URL}/${recipeImage}`}}/>
                <Text style={recipeListStyles.cardTitle}>{recipeName}</Text>
            </View>
        </TouchableOpacity>
    );
}

RecipeCard.propTypes = {
    recipeImage: PropTypes.string.isRequired,
    recipeName: PropTypes.string.isRequired,
    pressAction: PropTypes.func.isRequired
};
