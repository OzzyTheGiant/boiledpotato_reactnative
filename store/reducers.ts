import { createStore, combineReducers } from 'redux';
import { Action, Types } from "actions/actions";
import { RecipeSearchQuery } from "models/RecipeSearchQuery";

const initialState = {
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

			return {
				...query,
				cuisine
			}
			
		default:
			return query
	}
}

export default createStore(combineReducers({
	query: queryReducer
}));