import React from "react";
import PropTypes from "prop-types";
import { View, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler"
import SearchIcon from "assets/icons/search.svg";
import mainStyles, { Dimens } from "styles/Main";
import componentStyles from "styles/Header";

export default function SearchBar({ onInput, onSubmit } : any) {
	const { input, buttonIcon } = componentStyles;

	return (
		<View style={ [mainStyles.component, componentStyles.header] }>
			<TextInput style={input} placeholder="By ingredients" onChangeText={onInput}/>
			<TouchableOpacity style={buttonIcon} onPress={onSubmit}>
				<SearchIcon width={Dimens.buttonSizeMain} height={Dimens.buttonSizeMain}/>
			</TouchableOpacity>
		</View>
	);
}

SearchBar.propTypes = {
	onInput: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired
}