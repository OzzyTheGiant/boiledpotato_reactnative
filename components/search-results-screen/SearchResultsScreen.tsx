import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { View, FlatList } from "react-native";
import { Recipe } from "models/Recipe";
import * as actionCreator from "actions/actions";
import Header from "components/Header";
import Placeholder from "components/search-results-screen/Placeholder";
import RecipeCard from "components/search-results-screen/RecipeCard";
import LoadMoreButton from "components/search-results-screen/LoadMoreButton";
import ErrorNotification from "components/ErrorNotification";
import mainStyles from "styles/Main";
import recipeListStyles from "styles/RecipeList";

function SearchResultsScreen({query, resource, recipes, searchRecipes, selectRecipe, navigation}: any) {
    let element = null;

    // run only once after mounting
    useEffect(() => {
        if (recipes.length < 1) searchRecipes(query.keywords, query.cuisine, recipes.length);
    }, []);

    // action to occur when pressing a recipe from the list
    function pressHandler(recipe: Recipe) {
        selectRecipe(recipe);
        navigation.navigate("Recipe");
    }

    // check http request status and if no recipes found yet
    if (resource && !recipes.length) {
        switch(resource.status) {
            case "error":
                if (!recipes.length) resource.message = "No results found.";

                element = <ErrorNotification 
                    message={resource.message} 
                    retryAction={() => searchRecipes(query.keywords, query.cuisine, recipes.length)}/>;
                break;

            case "loading": default:
                element = <Fragment><Placeholder/><Placeholder/></Fragment>; 
                break;
        }
    } else if (recipes.length > 0) {
        // render list if there are any recipes available
        element = (
            <FlatList
                data={recipes}
                renderItem={({ item }: any) => 
                    <RecipeCard 
                        recipe={item}
                        pressAction={() => pressHandler(item)}/>
                }
                ListFooterComponent={() => 
                    recipes.length < query.totals ? 
                        <LoadMoreButton status={resource.status} loadAction={
                            () => searchRecipes(query.keywords, query.cuisine, recipes.length)
                        }/> 
                        : null
                }
                keyExtractor={(recipe: Recipe) => recipe.id.toString()}>
            </FlatList>
        );
    }

    return (
        <View style={mainStyles.parent}>
            <Header title="Search Results" backButtonAction={() => navigation.goBack()}/>
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
        searchRecipes: (keywords: string, cuisine: string, offset: number) => {
            dispatch(actionCreator.searchRecipes(keywords, cuisine, offset));
        },
        selectRecipe: (recipe: Recipe) => {
            dispatch(actionCreator.selectRecipe(recipe));
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsScreen)
