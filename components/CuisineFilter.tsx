import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import CuisineButton, { cuisines } from "components/CuisineButton";
import headerStyles from "styles/Header";
import mainStyles from "styles/Main";
import { cuisineFilterStyles } from "styles/CuisineFilter";

export default function CuisineFilter({ selectedCuisine, onSelect } : any) {
	return (
		<View style={ [mainStyles.component, cuisineFilterStyles.self] }>
			<Text style={ [headerStyles.title, cuisineFilterStyles.title] }>Cuisines</Text>
			<Text style={mainStyles.paragraph}>Filter search results by cuisine type</Text>
			{ 
				cuisines.map(cuisine => 
					<CuisineButton
					key={cuisine}
					cuisine={cuisine}
					isSelected={cuisine === selectedCuisine}
					onSelect={onSelect}/>
				)	 
			}
		</View>
	);
};

CuisineFilter.propTypes = {
	selectedCuisine: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired
}