import React, { useRef } from "react";
import { View, ScrollView } from "react-native";
import { connect } from "react-redux";
import EasyToast from "react-native-easy-toast";
import * as actionCreator from "actions/actions";
import Header from "components/Header";
import SearchBar from "components/main-screen/SearchBar";
import CuisineFilter from "components/main-screen/CuisineFilter";
import mainStyles from "styles/Main";

/** Main Screen component that displays search bar and cuisine filter buttons */
function MainScreen({ query, editKeywords, toggleCuisine, navigation } : any) {
    const toast : React.MutableRefObject<EasyToast | null> = useRef(null)
    const Toast : any = EasyToast

    // check that search field is not empty, and if so, display error message
    function validateField() {
        if (!query.keywords) {
            toast.current?.show("Please enter an ingredient!", 3000)
        } else {
            navigation.navigate('SearchResults')
        }
    }

	return (
		<View style={mainStyles.screen}>
			<Header title="Find a Recipe"/>
            <SearchBar onInput={editKeywords} onSubmit={validateField}/>
            <ScrollView bounces={false}>
                <CuisineFilter selectedCuisine={query.cuisine.toUpperCase()} onSelect={toggleCuisine}/>
            </ScrollView>
            <Toast 
                ref={toast} 
                style={mainStyles.toast} 
                positionValue={60}
                fadeInDuration={300}
                fadeOutDuration={300}/>
        </View>
	);
};

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
		toggleCuisine: (cuisine: string) => {
			dispatch(actionCreator.toggleCuisine(cuisine))
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
