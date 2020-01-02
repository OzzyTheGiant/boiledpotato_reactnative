import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import Header from "components/Header";
import SearchBar from "components/SearchBar";
import CuisineFilter from "components/CuisineFilter";

export default function App() {
	return (
		<View style={styles.root}>
			<Header/>
			<SearchBar/>
			<CuisineFilter/>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		paddingTop: Constants.statusBarHeight
	}
})