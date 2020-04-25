import { StyleSheet } from "react-native";
import { Colors, Dimens } from "styles/Main";

const recipeListStyles = StyleSheet.create({
    listContainer: {
        paddingBottom: Dimens.paddingViewport,
        flex: 1,
    },
    card: {
        borderRadius: Dimens.borderRadiusCuisine,
        backgroundColor: Colors.accent,
        marginBottom: Dimens.paddingViewport
    },
    cardImage: {
        borderTopLeftRadius: Dimens.borderRadiusCuisine,
        borderTopRightRadius: Dimens.borderRadiusCuisine,
        height: Dimens.recipeImageHeight,
        backgroundColor: Colors.primary
    },
    cardTitle: {
        borderBottomLeftRadius: Dimens.borderRadiusCuisine,
        borderBottomRightRadius: Dimens.borderRadiusCuisine,
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