import { StyleSheet } from 'react-native';
import { Colors, Dimens } from 'styles/Main'

export const headerStyles = StyleSheet.create({
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: Colors.neutral,
		padding: Dimens.paddingViewport
	},
	buttonIcon: {
		backgroundColor: Colors.primary,
		borderRadius: Dimens.borderRadiusMain,
		alignItems: "center"
	},
	title: {
		flex: 6,
		fontWeight: "bold",
		textAlign: "center",
		color: Colors.primary,
		fontSize: Dimens.fontSizeHeadings
	},
	input: {
		flex: 1,
		backgroundColor: Colors.white,
		borderRadius: Dimens.borderRadiusMain,
		height: Dimens.buttonSizeMain,
		marginRight: Dimens.paddingViewport,
		paddingHorizontal: Dimens.paddingViewport,
		fontSize: Dimens.fontSizeMain
	}
})