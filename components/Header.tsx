import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import ArrowBackIcon from 'assets/icons/arrow-back.svg';
import FavoriteIcon from 'assets/icons/star.svg';
import headerStyles from 'styles/Header';
import mainStyles from 'styles/Main';
import { Colors, Dimens } from 'styles/Main';

export default function Header({ title, overlay, backButtonAction } : any) {
    const styles = [headerStyles.header, mainStyles.component];
    
    if (overlay) styles.push(headerStyles.clearHeader as any);

	return (
		<View style={styles}>
			<TouchableOpacity onPress={backButtonAction}>
				<ArrowBackIcon width={Dimens.buttonSizeMain} height={Dimens.buttonSizeMain} fill={Colors.primary}/>
			</TouchableOpacity>
			<Text style={headerStyles.title}>{title}</Text>
            { title !== "Search Results" ?
                <TouchableOpacity onPress={() => { return }}>
                    <FavoriteIcon width={Dimens.buttonSizeMain} height={Dimens.buttonSizeMain} fill={Colors.primary}/>
                </TouchableOpacity> :
                <View style={{width: Dimens.buttonSizeMain, height: Dimens.buttonSizeMain}}></View>
            }
		</View>
	)
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    overlay: PropTypes.bool,
    backButtonAction: PropTypes.func
}

Header.defaultProps = {
    overlay: false
};
