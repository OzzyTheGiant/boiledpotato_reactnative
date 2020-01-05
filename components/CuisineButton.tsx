import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getButtonStyle } from "styles/CuisineFilter";
import { Dimens } from "styles/Main";
import BurgerIcon from "assets/icons/burger.svg";
import CroissantIcon from "assets/icons/croissant.svg";
import CurryIcon from "assets/icons/curry.svg";
import FishAndChipsIcon from "assets/icons/fish-and-chips.svg";
import PaellaIcon from "assets/icons/paella.svg";
import PizzaIcon from "assets/icons/pizza.svg";
import RiceIcon from "assets/icons/rice.svg";
import SushiIcon from "assets/icons/sushi.svg";
import TacoIcon from "assets/icons/taco.svg";
import { SvgProps } from "react-native-svg";

const buttonIcons : { [key: string] : React.StatelessComponent<SvgProps> } = {
	AMERICAN: BurgerIcon,
	MEXICAN : TacoIcon,
	CHINESE : RiceIcon,
	JAPANESE: SushiIcon,
	INDIAN  : CurryIcon,
	FRENCH  : CroissantIcon,
	ITALIAN : PizzaIcon,
	SPANISH : PaellaIcon,
	BRITISH : FishAndChipsIcon
};

export const cuisines = Object.keys(buttonIcons);

export default function CuisineButton({cuisine, isSelected, onSelect} : any) {
	let styles = getButtonStyle(isSelected)
	let Icon = buttonIcons[cuisine]

	function onPressHandler() {
		onSelect(cuisine);
	}

	return (
		<TouchableOpacity style={styles.button} onPress={onPressHandler}>
			<Icon 
			width={Dimens.iconSizeCuisine} 
			height={Dimens.iconSizeCuisine} 
			fill={styles.buttonText.color}/>
			<Text style={styles.buttonText}>{cuisine}</Text>
		</TouchableOpacity>
	);
};

CuisineButton.propTypes = {
	cuisine: PropTypes.string.isRequired,
	isSelected: PropTypes.bool,
	onSelect: PropTypes.func.isRequired
};