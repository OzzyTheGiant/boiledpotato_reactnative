import { StyleSheet } from "react-native";
import { Colors, Dimens } from "./Main";

const recipeStyles = StyleSheet.create({
    image: {
        width: "100%",
        height: 200
    },
    title: {
        width: "100%",
        color: Colors.white,
        backgroundColor: Colors.accent,
        fontSize: Dimens.fontSizeRecipeTitle
    },
    labels: {
        backgroundColor: Colors.neutral,
        flexDirection: "row",
        justifyContent: "center"
    },
    label: {
        alignItems: "center",
        flex: 1
    },
    labelText: {
        color: Colors.primary,
        fontSize: Dimens.fontSizeDescription,
    },
    detailsHeading: {
        fontSize: Dimens.fontSizeHeadings,
        color: Colors.accent
    },
    detailsText: {
        fontSize: Dimens.fontSizeMain
    },
    detailsBackground: {
        backgroundColor: Colors.primary
    }
});

export default recipeStyles
