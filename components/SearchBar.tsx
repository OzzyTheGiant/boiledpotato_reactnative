import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import SearchIcon from "assets/icons/search.svg";
import mainStyles from "styles/Main";
import componentStyles from "styles/Header";
import { Dimens } from "styles/Main";

export default function SearchBar() {
	return (
		<View style={[mainStyles.component, componentStyles.header]}>
			<TextInput style={componentStyles.input} placeholder="By ingredients"/>
			<TouchableOpacity style={componentStyles.buttonIcon}>
				<SearchIcon width={Dimens.buttonSizeMain} height={Dimens.buttonSizeMain}/>
			</TouchableOpacity>
		</View>
	);
}