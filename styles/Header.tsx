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
	button: {
		flex: 1,
		padding: 4
	},
	buttonIcon: {
		width: Dimens.buttonSizeMain,
		height: Dimens.buttonSizeMain
	},
	title: {
		flex: 6,
		fontWeight: "bold",
		textAlign: "center",
		color: Colors.primary,
		fontSize: Dimens.fontSizeHeadings
	}
})