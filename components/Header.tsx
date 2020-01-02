import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from 'styles/Header';
import { Colors, Dimens } from 'styles/Main';
import ArrowBackIcon from 'assets/icons/arrow-back.svg';
import FavoriteIcon from 'assets/icons/star.svg';

export default function Header() {
	return (
		<View style={styles.header}>
			<TouchableOpacity onPress={() => { return }}>
				<ArrowBackIcon width={Dimens.buttonSizeMain} height={Dimens.buttonSizeMain} fill={Colors.primary}/>
			</TouchableOpacity>
			<Text style={styles.title}>Find a Recipe</Text>
			<TouchableOpacity onPress={() => { return }}>
				<FavoriteIcon width={Dimens.buttonSizeMain} height={Dimens.buttonSizeMain} fill={Colors.primary}/>
			</TouchableOpacity>
		</View>
	)
}