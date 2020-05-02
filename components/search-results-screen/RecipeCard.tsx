import React from "react";
import PropTypes from "prop-types";
import { View, Image, Text } from "react-native";
import recipeListStyles from "styles/RecipeList";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const BASE_URL = "https://spoonacular.com/recipeImages";

export default function RecipeCard({ recipe, pressAction }: any) {
    return (
        <TouchableWithoutFeedback onPress={pressAction}>
            <View style={recipeListStyles.card}>
                <Image style={recipeListStyles.cardImage} source={{uri: `${BASE_URL}/${recipe.imageFileName}`}}/>
                <Text style={recipeListStyles.cardTitle}>{recipe.name}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

RecipeCard.propTypes = {
    recipe: PropTypes.object.isRequired,
    pressAction: PropTypes.func.isRequired
};
