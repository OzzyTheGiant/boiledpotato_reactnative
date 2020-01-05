import React, { Props } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import Constants from "expo-constants";
import Header from "components/Header";
import SearchBar from "components/SearchBar";
import CuisineFilter from "components/CuisineFilter";
import * as actionCreator from "actions/actions";

/** Main Screen component that displays search bar and cuisine filter buttons */
function MainScreen({ query, editKeywords, startSearch, toggleCuisine } : any) {
	console.log(query);
	
	return (
		<View style={styles.screen}>
			<Header/>
			<SearchBar onInput={editKeywords} onSubmit={startSearch} keywords={query.keywords}/>
			<CuisineFilter selectedCuisine={query.cuisine.toUpperCase()} onSelect={toggleCuisine}/>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		paddingTop: Constants.statusBarHeight
	}
})

// mapping functions for redux
function mapStateToProps(state: any) {
	return {
		query: state.query
	};
}

function mapDispatchToProps(dispatch: Function) {
	return {
		editKeywords: (keywords: string) => {
			dispatch(actionCreator.editKeywords(keywords))
		},
		startSearch: () => {
			dispatch(actionCreator.startSearch())
		},
		toggleCuisine: (cuisine: string) => {
			dispatch(actionCreator.toggleCuisine(cuisine))
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
