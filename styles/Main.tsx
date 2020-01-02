import { StyleSheet } from "react-native"

export const Colors = {
	primary: "#FFE55F",
	primaryDark: "#EEC500",
	primaryBackground: "#FFF9C4",
	accent: "#B35321",
	placeholder: "#BBBBBB",
	text: "#888888",
	neutral: "#000000",
	white: "#FFFFFF"
}

export const Dimens = {
	fontSizeHeadings: 28,
	fontSizeMain: 16,
	fontSizeDescription: 20,
	paddingViewport: 8,
	buttonSizeMain: 36,
	borderRadiusMain: 3
}

const mainStyles = StyleSheet.create({
	component: {
		padding: Dimens.paddingViewport
	},
	paragraph: {
		width: "100%",
		fontSize: Dimens.fontSizeDescription,
		color: Colors.text,
		textAlign: "center"
	}
})

export default mainStyles;