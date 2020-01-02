import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import SearchIcon from 'assets/icons/search.svg';
import styles from 'styles/Header';
import { Dimens } from 'styles/Main';

export default function SearchBar() {
	return (
		<View style={[styles.header]}>
			<TextInput style={styles.input} placeholder="By ingredients"/>
			<TouchableOpacity style={styles.buttonIcon}>
				<SearchIcon width={Dimens.buttonSizeMain} height={Dimens.buttonSizeMain}/>
			</TouchableOpacity>
		</View>
	);
}