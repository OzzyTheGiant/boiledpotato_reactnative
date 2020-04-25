import React, { useEffect } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import Header from "components/Header";
import Placeholder from "components/search-results-screen/Placeholder";
import mainStyles from "styles/Main";
import * as actionCreator from "actions/actions";

function SearchResultsScreen({query, resource, recipes, searchRecipes}: any) {

    // run only once after mounting
    useEffect(() => {
        if (recipes.length < 1) searchRecipes(query.keywords, query.cuisine);
    }, []);

    console.log("COMPONENT", query, resource, recipes);

    return (
        <View>
            <Header title="Search Results"/>
            <View style={mainStyles.component}>
                <Placeholder/>
                <Placeholder/>
            </View>
        </View>
    );
}

function mapStateToProps(state: any) {
    return {
        query: state.query,
        resource: state.resource,
        recipes: state.recipes
    }
}

function mapDispatchToProps(dispatch: Function) {
    return {
        searchRecipes: (keywords: string, cuisine: string) => {
            dispatch(actionCreator.searchRecipes(keywords, cuisine));
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsScreen)
