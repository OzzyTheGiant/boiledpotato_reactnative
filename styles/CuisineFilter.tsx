import { StyleSheet, Dimensions } from "react-native";
import { Colors, Dimens } from "styles/Main";

export const cuisineFilterStyles = StyleSheet.create({
	self: {
        justifyContent: "space-between",
		flexWrap: "wrap",
		flexDirection: "row",
	},
	title: {
		flex: 0, // must be set since it's first element, otherwise will dissappear
        width: "100%",
		color: Colors.neutral
    },
    buttonContainer: {
        // implicit flex: 0 with 31% width will size the container of the
        // TouchableOpacity. It needs it's own containerStyle
        width:"31%",
        marginTop: Dimens.paddingViewport * 1.5,
    }
});


const baseButtonStyle = {
	button: {
        width: "100%",
		height: Dimens.buttonSizeCuisine,
		borderRadius: Dimens.borderRadiusCuisine,
		justifyContent: "center",
		alignItems: "center"
	},
	buttonText: {
		marginTop: Dimens.paddingViewport
	}
};

const deselectedStyle : any = {
	button: {
		...baseButtonStyle.button,
		backgroundColor: Colors.neutral
	},
	buttonText: {
		...baseButtonStyle.buttonText,
		color: Colors.primary
	}
};

const selectedStyle : any = {
	button: {
		...baseButtonStyle.button,
		backgroundColor: Colors.primary
	},
	buttonText: {
		...baseButtonStyle.buttonText,
		color: Colors.neutral
	}
}

const deselectedButtonStyle = StyleSheet.create(deselectedStyle);
const selectedButtonStyle = StyleSheet.create(selectedStyle);

export function getButtonStyle(isSelected: boolean) {
	return isSelected ? selectedButtonStyle : deselectedButtonStyle;
}