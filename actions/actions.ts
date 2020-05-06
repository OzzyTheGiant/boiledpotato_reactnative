import * as repository from "actions/repository";
import { Recipe } from "models/Recipe";

export const Types = {
	EDIT_KEYWORDS : "EDIT_KEYWORDS",
    TOGGLE_CUISINE : "TOGGLE_CUISINE",
    SEARCH_RECIPES  : "SEARCH_RECIPES",
    SEARCH_RECIPES_LOADING: "SEARCH_RECIPES_PENDING",
    SEARCH_RECIPES_SUCCESS: "SEARCH_RECIPES_FULFILLED",
    SEARCH_RECIPES_ERROR: "SEARCH_RECIPES_REJECTED",
    SEARCH_FAVORITE_RECIPES: "SEARCH_FAVORITE_RECIPES",
    SEARCH_FAVORITE_RECIPES_LOADING: "SEARCH_FAVORITE_RECIPES_PENDING",
    SEARCH_FAVORITE_RECIPES_SUCCESS: "SEARCH_FAVORITE_RECIPES_FULFILLED",
    SEARCH_FAVORITE_RECIPES_ERROR: "SEARCH_FAVORITE_RECIPES_REJECTED",
    CLEAR_SEARCH_RESULTS: "CLEAR_SEARCH_RESULTS",
    SELECT_RECIPE: "SELECT_RECIPE",
    GET_RECIPE_DETAILS : "GET_RECIPE_DETAILS",
    GET_RECIPE_DETAILS_LOADING: "GET_RECIPE_DETAILS_PENDING",
    GET_RECIPE_DETAILS_SUCCESS: "GET_RECIPE_DETAILS_FULFILLED",
    GET_RECIPE_DETAILS_ERROR: "GET_RECIPE_DETAILS_REJECTED",
    TOGGLE_RECIPE_AS_FAVORITE: "TOGGLE_RECIPE_AS_FAVORITE",
    TOGGLE_RECIPE_AS_FAVORITE_LOADING: "TOGGLE_RECIPE_AS_FAVORITE_PENDING",
    TOGGLE_RECIPE_AS_FAVORITE_SUCCESS: "TOGGLE_RECIPE_AS_FAVORITE_FULFILLED",
    TOGGLE_RECIPE_AS_FAVORITE_ERROR: "TOGGLE_RECIPE_AS_FAVORITE_REJECTED"
}

// the type definition for an Action to be dispatched to store
export interface Action {
	type: String
    value?: any,
    payload?: any // for redux-promise-middleware
}

export function editKeywords(keywords: string) : Action {
	return {
		type: Types.EDIT_KEYWORDS,
		value: keywords.toLowerCase().trim()
	}
}

export function toggleCuisine(cuisine: string) : Action {
	return {
		type: Types.TOGGLE_CUISINE,
		value: cuisine.toLowerCase()
	}
}

export function searchRecipes(keywords: string, cuisine: string, offset: number) : Action {
    if (keywords === "favorites") {
        return {
            type: Types.SEARCH_FAVORITE_RECIPES,
            payload: repository.getFavoriteRecipes()
        }
    }

	return {
        type: Types.SEARCH_RECIPES,
        payload: repository.getRecipes(keywords, cuisine, offset)
	};
}

export function clearSearchResults() : Action {
    return { type: Types.CLEAR_SEARCH_RESULTS };
}

export function selectRecipe(recipe: Recipe) : Action {
    return {
        type: Types.SELECT_RECIPE,
        value: recipe
    };
}

export function getRecipeDetails(id: number) : Action {
	return {
        type: Types.GET_RECIPE_DETAILS,
        payload: repository.getRecipeDetails(id)
	};
}

export function toggleRecipeAsFavorite(id: number, isFavorite: boolean) : Action {
    return {
        type: Types.TOGGLE_RECIPE_AS_FAVORITE,
        payload: repository.toggleRecipeAsFavorite(id, !isFavorite)
    }
}
