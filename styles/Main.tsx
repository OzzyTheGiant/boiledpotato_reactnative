import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export const Colors = {
	primary: "#FFE55F",
	primaryDark: "#EEC500",
	primaryBackground: "#FFF9C4",
	accent: "#B35321",
	placeholder: "#BBBBBB",
	text: "#888888",
	neutral: "#000000",
    white: "#FFFFFF",
    error: "#FF0000"
}

export const Dimens = {
	fontSizeHeadings: 28,
	fontSizeMain: 16,
    fontSizeDescription: 20,
    fontSizeButton: 24,

    recipeImageHeight: 180,
    placeHolderWidth: 600,
    placeHolderHeight: 240,
    placeHolderTextHeight: 20,
    shimmerWidth: 0.3,

    paddingViewport: 8,
    
    buttonSizeMain: 36,
    buttonSizeLarge: 52,
    buttonSizeCuisine: 96,
    
    iconSizeCuisine: 36,
    
	borderRadiusMain: 3,
	borderRadiusCuisine: 5
}

const mainStyles = StyleSheet.create({
    screen: {
		paddingTop: Constants.statusBarHeight
    },
    parent: {
        flex: 1
    },
	component: {
		padding: Dimens.paddingViewport
	},
	paragraph: {
        // width: 100% will hardcode the width 
        // to use percentage based on screen size, using flex: 0 implicitly
        width: "100%",
		fontSize: Dimens.fontSizeDescription,
		color: Colors.text,
		textAlign: "center"
    },
    button: {
        width: "100%",
        maxWidth: 420,
        paddingTop: Dimens.paddingViewport * 2,
        paddingBottom: Dimens.paddingViewport * 2,
        fontSize: Dimens.fontSizeButton,
        backgroundColor: Colors.primaryDark,
        paddingLeft: Dimens.paddingViewport,
        paddingRight: Dimens.paddingViewport,
        textAlign: "center",
        borderRadius: Dimens.borderRadiusCuisine,
        overflow: "hidden", // to fix border radius issue
        justifyContent: "center"
    },
    buttonFitted: {
        width: "auto",
        paddingLeft: Dimens.paddingViewport * 2,
        paddingRight: Dimens.paddingViewport * 2
    },
    buttonLoading: {
        backgroundColor: Colors.primary
    },
    buttonError: {
        backgroundColor: Colors.placeholder,
        flexDirection: "row",
        fontSize: Dimens.fontSizeMain
    },
    buttonErrorChild: {
        flex: 1
    },
    buttonErrorIcon: {
        marginRight: Dimens.paddingViewport
    },
    errorNotification: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    errorText: {
        fontSize: Dimens.fontSizeDescription,
        paddingLeft: Dimens.paddingViewport,
        paddingRight: Dimens.paddingViewport,
        marginTop: Dimens.paddingViewport * 2,
        marginBottom: Dimens.paddingViewport * 2,
        textAlign: "center"
    },
    placeholder: {
        width: "100%",
        marginBottom: Dimens.paddingViewport
    }
})

export default mainStyles;