import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";
import EasyToast from "react-native-easy-toast";
import Constants from "expo-constants";
import * as actionCreator from "actions/actions";
import Header from "components/Header";
import SearchBar from "components/SearchBar";
import CuisineFilter from "components/CuisineFilter";
import { Colors } from "styles/Main";

/** Main Screen component that displays search bar and cuisine filter buttons */
function MainScreen({ query, editKeywords, startSearch, toggleCuisine } : any) {
    const toast : React.MutableRefObject<EasyToast | null> = useRef(null)
    const Toast : any = EasyToast

    // check that search field is not empty, and if so, display error message
    function validateField() {
        if (!query.keywords) {
            toast.current?.show("Please enter an ingredient!", 3000)
        } else {
            startSearch();
        }
    }

	return (
		<View style={styles.screen}>
			<Header/>
            <SearchBar onInput={editKeywords} onSubmit={validateField}/>
            <ScrollView bounces={false}>
                <CuisineFilter selectedCuisine={query.cuisine.toUpperCase()} onSelect={toggleCuisine}/>
            </ScrollView>
            <Toast 
                ref={toast} 
                style={styles.toast} 
                positionValue={60}
                fadeInDuration={300}
                fadeOutDuration={300}/>
        </View>
	);
};

const styles = StyleSheet.create({
	screen: {
		paddingTop: Constants.statusBarHeight
    },
    toast: {
        backgroundColor: Colors.accent
    }
})

// mapping functions for redux
function mapStateToProps(state: any) {
	return {
        lastAction: state.lastAction,
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
