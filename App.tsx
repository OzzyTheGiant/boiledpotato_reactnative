import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Header from 'components/Header';

export default function App() {
	return (
		<View style={styles.root}>
			<Header/>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		paddingTop: Constants.statusBarHeight
	}
})