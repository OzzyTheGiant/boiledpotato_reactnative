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

function SearchResultsScreen({query, resource, recipes, searchRecipes}: any) {
    let element = null;

    // run only once after mounting
    useEffect(() => {
        if (recipes.length < 1) searchRecipes(query.keywords, query.cuisine, recipes.length);
    }, []);

    // check http request status and if no recipes found yet
    if (resource && !recipes.length) {
        switch(resource.status) {
            case "loading":
                element = <Fragment><Placeholder/><Placeholder/></Fragment>; 
                break;

            case "error": default:
                element = <ErrorNotification 
                    message={resource.message} 
                    retryAction={() => searchRecipes(query.keywords, query.cuisine, recipes.length)}/>;
                break;
        }
    } else if (recipes.length > 0) {
        // render list if there are any recipes available
        element = (
            <FlatList
                data={recipes}
                renderItem={({ item }: any) => 
                    <RecipeCard recipeName={item.name} recipeImage={item.imageFileName}/>
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
        searchRecipes: (keywords: string, cuisine: string, offset: number) => {
            dispatch(actionCreator.searchRecipes(keywords, cuisine, offset));
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsScreen)
