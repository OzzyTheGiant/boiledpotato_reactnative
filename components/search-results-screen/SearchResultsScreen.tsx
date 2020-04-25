import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { View, FlatList } from "react-native";
import Header from "components/Header";
import Placeholder from "components/search-results-screen/Placeholder";
import mainStyles from "styles/Main";
import recipeListStyles from "styles/RecipeList";
import * as actionCreator from "actions/actions";
import RecipeCard from "./RecipeCard";
import { Recipe } from "models/Recipe";

function SearchResultsScreen({query, resource, recipes, searchRecipes}: any) {
    let element = null;

    // run only once after mounting
    useEffect(() => {
        if (recipes.length < 1) searchRecipes(query.keywords, query.cuisine);
    }, []);

    if (resource) {
        switch(resource.status) {
            case "loading":
                element = (
                    <Fragment>
                        <Placeholder/>
                        <Placeholder/>
                    </Fragment>
                ); break;

            case "success":
                element = (
                    <FlatList
                        data={recipes}
                        renderItem={({ item }: any) => 
                            <RecipeCard recipeName={item.name} recipeImage={item.imageFileName}/>
                        }
                        keyExtractor={(recipe: Recipe) => recipe.id.toString()}>
                    </FlatList>
                ); break;

            case "error": default:
                element = "error";
                break;
        }
    }

    return (
        <View style={mainStyles.parent}>
            <Header title="Search Results"/>
            <View style={[mainStyles.component, recipeListStyles.listContainer]}>
            { element }
            </View>
        </View>
    );
}

SearchResultsScreen.propTypes = {
    query: PropTypes.object.isRequired,
    resource: PropTypes.object, 
    recipes: PropTypes.arrayOf(PropTypes.object), 
    searchRecipes: PropTypes.func.isRequired
};

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
