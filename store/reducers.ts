import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import { Action, Types } from "actions/actions";
import { RecipeSearchQuery } from "models/RecipeSearchQuery";
import { Recipe } from "models/Recipe";
import { Resource } from "models/Resource";

const initialState = {
    resourceStatus: null,
	query: {
		id: 0,
		keywords: "",
		cuisine: "",
		totals: 0,
		expires: 0
	}
}

function queryReducer(query: RecipeSearchQuery = initialState.query, action: Action) : RecipeSearchQuery {
	switch(action.type) {
		case Types.EDIT_KEYWORDS:
			return {
				...query,
				keywords: action.value
			};

		case Types.TOGGLE_CUISINE:
			let cuisine = query.cuisine === action.value ? "" : action.value
			return { ...query, cuisine };
        
        case Types.SEARCH_RECIPES_SUCCESS:
            return { ...query, ...action.payload.query };
            
		default: return query;
	}
}

function resourceReducer(resource: Resource, action: Action) : Resource | null {
    switch(action.type) {
        case Types.SEARCH_RECIPES_SUCCESS:
            return { status: "success" };
        
        case Types.SEARCH_RECIPES_ERROR:
            return { status: "error", message: action.payload };

        case Types.SEARCH_RECIPES_LOADING:
            return { status: "loading" };

        default: return null;
    }
}

function recipeListReducer(recipes: Recipe[] = [], action: Action) : Recipe[] {
    switch(action.type) {
        case Types.SEARCH_RECIPES_SUCCESS:
            return [...recipes, ...action.payload.recipes];

        default: return recipes;
    }
}

// apply middleware to store and generate new createStore function
const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

export default createStoreWithMiddleware(combineReducers({
    query: queryReducer,
    resource: resourceReducer,
    recipes: recipeListReducer
}));