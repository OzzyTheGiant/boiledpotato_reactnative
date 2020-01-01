import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import SearchIcon from 'assets/icons/search.svg';
import { headerStyles } from 'styles/Header';
import { Dimens } from 'styles/Main';

export default function SearchBar() {
	return (
		<View style={[headerStyles.header]}>
			<TextInput style={headerStyles.input}/>
			<TouchableOpacity style={headerStyles.buttonIcon}>
				<SearchIcon width={Dimens.buttonSizeMain} height={Dimens.buttonSizeMain}/>
			</TouchableOpacity>
		</View>
	);
}