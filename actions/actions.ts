import { fetchRecipes, fetchRecipeDetails } from "actions/network";
import { Recipe } from "models/Recipe";

export const Types = {
	EDIT_KEYWORDS : "EDIT_KEYWORDS",
    TOGGLE_CUISINE : "TOGGLE_CUISINE",
	SEARCH_RECIPES  : "SEARCH_RECIPES",
    SEARCH_RECIPES_LOADING: "SEARCH_RECIPES_PENDING",
    SEARCH_RECIPES_SUCCESS: "SEARCH_RECIPES_FULFILLED",
    SEARCH_RECIPES_ERROR: "SEARCH_RECIPES_REJECTED",
    SELECT_RECIPE: "SELECT_RECIPE",
    GET_RECIPE_DETAILS : "GET_RECIPE_DETAILS",
    GET_RECIPE_DETAILS_LOADING: "GET_RECIPE_DETAILS_PENDING",
    GET_RECIPE_DETAILS_SUCCESS: "GET_RECIPE_DETAILS_FULFILLED",
    GET_RECIPE_DETAILS_ERROR: "GET_RECIPE_DETAILS_REJECTED"
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
		value: keywords
	}
}

export function toggleCuisine(cuisine: string) : Action {
	return {
		type: Types.TOGGLE_CUISINE,
		value: cuisine.toLowerCase()
	}
}

export function searchRecipes(keywords: string, cuisine: string, offset: number) : Action {
	return {
        type: Types.SEARCH_RECIPES,
        payload: fetchRecipes(keywords, cuisine, offset)
	}
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
        payload: fetchRecipeDetails(id)
	}
}
