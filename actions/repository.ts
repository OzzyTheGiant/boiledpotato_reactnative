/** Module for fetching data from multiple sources such as web APIs, databases, etc. */
import * as dao from "actions/database";
import * as httpAPI from "actions/network";
import { RecipeSearchQuery } from "models/RecipeSearchQuery";
import { Recipe } from "models/Recipe";

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

export function getRecipeDetails(id: number) : () => Promise<any> {
    return async () => {
        const result = await httpAPI.fetchRecipeDetails(id);
        dao.updateRecipe(id, result);
        return result;
    };
}

export function getFavoriteRecipes() : () => Promise<any> {
    return async () => {
        const recipes = await dao.fetchFavoriteRecipes();
        if (!recipes.length) throw new Error("Data Error: No results found");
        return recipes;
    }
}

export function toggleRecipeAsFavorite(id: number, isFavorite: boolean) : () => Promise<boolean> {
    return async () => {
        const didUpdate = await dao.toggleRecipeAsFavorite(id, isFavorite);
        if (!didUpdate) throw new Error("Data Error: recipe could not be updated.")
        return isFavorite;
    };
}
