import { StyleSheet } from "react-native";
import { Colors, Dimens } from "styles/Main";

const recipeListStyles = StyleSheet.create({
    card: {
        borderRadius: Dimens.borderRadiusCuisine,
        backgroundColor: Colors.accent,
    },
    cardImage: {
        height: Dimens.recipeImageHeight,
        backgroundColor: Colors.primary
    },
    cardTitle: {
        margin: Dimens.paddingViewport,
        fontSize: Dimens.fontSizeDescription,
        color: Colors.white
    },
    placeholder: {
        width: "100%",
        marginBottom: Dimens.paddingViewport
    }
});

export default recipeListStyles;