import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import headerStyles from "styles/Header";
import mainStyles, { Dimens, Colors } from "styles/Main";
import componentStyles from "styles/CuisineFilter";
import BurgerIcon from "assets/icons/burger.svg";
import CroissantIcon from "assets/icons/croissant.svg";
import CurryIcon from "assets/icons/curry.svg";
import FishAndChipsIcon from "assets/icons/fish-and-chips.svg";
import PaellaIcon from "assets/icons/paella.svg";
import PizzaIcon from "assets/icons/pizza.svg";
import RiceIcon from "assets/icons/rice.svg";
import SushiIcon from "assets/icons/sushi.svg";
import TacoIcon from "assets/icons/taco.svg";

export default function CuisineFilter() {
	const buttonIcons = {
		AMERICAN: <BurgerIcon width={Dimens.iconSizeCuisine} height={Dimens.iconSizeCuisine} fill={Colors.primary}/>,
		MEXICAN : <TacoIcon width={Dimens.iconSizeCuisine} height={Dimens.iconSizeCuisine} fill={Colors.primary}/>,
		CHINESE : <RiceIcon width={Dimens.iconSizeCuisine} height={Dimens.iconSizeCuisine} fill={Colors.primary}/>,
		JAPANESE: <SushiIcon width={Dimens.iconSizeCuisine} height={Dimens.iconSizeCuisine} fill={Colors.primary}/>,
		INDIAN  : <CurryIcon width={Dimens.iconSizeCuisine} height={Dimens.iconSizeCuisine} fill={Colors.primary}/>,
		FRENCH  : <CroissantIcon width={Dimens.iconSizeCuisine} height={Dimens.iconSizeCuisine} fill={Colors.primary}/>,
		ITALIAN : <PizzaIcon width={Dimens.iconSizeCuisine} height={Dimens.iconSizeCuisine} fill={Colors.primary}/>,
		SPANISH : <PaellaIcon width={Dimens.iconSizeCuisine} height={Dimens.iconSizeCuisine} fill={Colors.primary}/>,
		BRITISH : <FishAndChipsIcon width={Dimens.iconSizeCuisine} height={Dimens.iconSizeCuisine} fill={Colors.primary}/>
	};

	return (
		<View style={[mainStyles.component, componentStyles.self]}>
			<Text style={[headerStyles.title, componentStyles.title]}>Cuisines</Text>
			<Text style={mainStyles.paragraph}>Filter search results by cuisine type</Text>

			{ Object.keys(buttonIcons).map((cuisine) => {
				return (
					<TouchableOpacity key={cuisine} style={componentStyles.button}>
						{(buttonIcons as any)[cuisine]}
						<Text style={componentStyles.buttonText}>{cuisine}</Text>
					</TouchableOpacity>
				)
			})}
		</View>
	);
};