import { StyleSheet, Dimensions } from "react-native";
import { Colors, Dimens } from "styles/Main";

export const cuisineFilterStyles = StyleSheet.create({
	self: {
		justifyContent: "space-between",
		flexWrap: "wrap",
		flexDirection: "row",
	},
	title: {
		flex: 0,
		width: "100%",
		color: Colors.neutral
	}
});


const baseButtonStyle = {
	button: {
		width: Dimensions.get('window').width * 0.3,
		height: Dimens.buttonSizeCuisine,
		borderRadius: Dimens.borderRadiusCuisine,
		marginTop: Dimens.paddingViewport,
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