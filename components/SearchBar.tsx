import React from "react";
import PropTypes from "prop-types";
import { View, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler"
import SearchIcon from "assets/icons/search.svg";
import mainStyles from "styles/Main";
import componentStyles from "styles/Header";
import { Dimens } from "styles/Main";

export default function SearchBar({ onInput, onSubmit } : any) {
	const { input, buttonIcon } = componentStyles;

	function onChangeHandler(fieldText: string) {
		onInput(fieldText);
	}

	return (
		<View style={ [mainStyles.component, componentStyles.header] }>
			<TextInput style={input} placeholder="By ingredients" onChangeText={onChangeHandler}/>
			<TouchableOpacity style={buttonIcon} onPress={onSubmit}>
				<SearchIcon width={Dimens.buttonSizeMain} height={Dimens.buttonSizeMain}/>
			</TouchableOpacity>
		</View>
	);
}

SearchBar.propTypes = {
	keywords: PropTypes.string.isRequired,
	onInput: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired
}