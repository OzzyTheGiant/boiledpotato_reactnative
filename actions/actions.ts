export const Types = {
	EDIT_KEYWORDS : "EDIT-KEYWORDS",
	START_SEARCH  : "START-SEARCH",
	TOGGLE_CUISINE : "TOGGLE-CUISINE"
}

// the type definition for an Action to be dispatched to store
export interface Action {
	type: String
	value?: any
}

export function editKeywords(keywords: string) : Action {
	return {
		type: Types.EDIT_KEYWORDS,
		value: keywords
	}
}

export function startSearch() : Action {
	return {
		type: Types.START_SEARCH
	}
}

export function toggleCuisine(cuisine: string) : Action {
	return {
		type: Types.TOGGLE_CUISINE,
		value: cuisine.toLowerCase()
	}
}