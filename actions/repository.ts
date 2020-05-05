/** Module for fetching data from multiple sources such as web APIs, databases, etc. */
import * as dao from "actions/database";
import * as httpAPI from "actions/network";
import { RecipeSearchQuery } from "models/RecipeSearchQuery";

export function getRecipes(keywords: string, cuisine: string, offset: number) : () => Promise<any> {
    return async () => {
        const query = await dao.fetchSearchQuery(keywords, cuisine);
        let isStale, result = { query, recipes: [] };

        if (query) {
            isStale = new Date().getTime() > (query as RecipeSearchQuery).expires;
            result.recipes = await dao.fetchRecipesByQuery(query.id, 10, offset);
        }

        // check if query has never been done, expired, or has no recipes
        if (!query || isStale || !result.recipes.length) {
            result = await httpAPI.fetchRecipes(keywords, cuisine, offset);
            dao.saveAll(result.query, result.recipes);
        }

        return result;
    };
}

export function getRecipeDetails(id: number) {
    return async () => {
        const result = await httpAPI.fetchRecipeDetails(id);
        dao.updateRecipe(id, result);
        return result;
    };
}
