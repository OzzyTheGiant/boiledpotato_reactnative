import { StyleSheet } from "react-native";
import { Colors, Dimens } from "styles/Main";

const cuisineFilterStyles = StyleSheet.create({
	self: {
		justifyContent: "space-between",
		flexWrap: "wrap",
		flexDirection: "row",
	},
	title: {
		flex: 0,
		width: "100%",
		color: Colors.neutral
	},
	button: {
		width: "30%",
		height: Dimens.buttonSizeCuisine,
		backgroundColor: Colors.neutral,
		borderRadius: Dimens.borderRadiusCuisine,
		marginTop: Dimens.paddingViewport,
		justifyContent: "center",
		alignItems: "center"
	},
	buttonText: {
		marginTop: Dimens.paddingViewport,
		color: Colors.primary
	}
});

export default cuisineFilterStyles;