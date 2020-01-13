import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ArrowBackIcon from 'assets/icons/arrow-back.svg';
import FavoriteIcon from 'assets/icons/star.svg';
import headerStyles from 'styles/Header';
import mainStyles from 'styles/Main';
import { Colors, Dimens } from 'styles/Main';

export default function Header({title} : any) {
	return (
		<View style={[headerStyles.header, mainStyles.component]}>
			<TouchableOpacity onPress={() => { return }}>
				<ArrowBackIcon width={Dimens.buttonSizeMain} height={Dimens.buttonSizeMain} fill={Colors.primary}/>
			</TouchableOpacity>
			<Text style={headerStyles.title}>{title}</Text>
			<TouchableOpacity onPress={() => { return }}>
				<FavoriteIcon width={Dimens.buttonSizeMain} height={Dimens.buttonSizeMain} fill={Colors.primary}/>
			</TouchableOpacity>
		</View>
	)
}