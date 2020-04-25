import { RecipeSearchQuery } from "models/RecipeSearchQuery";
import { Recipe } from "models/Recipe";

const HEADERS = {
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    "X-RapidAPI-Key": "1b67721abbmshc3b7504817adbb8p159e5cjsn9dcca623b95c"
};

/** Fetch a list of recipes and its metadata from REST API */
export function fetchRecipes(keywords: string, cuisine: string) : any {
    return async () => {
        const url = `https://${HEADERS["X-RapidAPI-Host"]}/recipes/search`;
        const queryString = `?query=${keywords}&cuisine=${cuisine}`;

        try {
            const response = await fetch(url + queryString, {
                method: "GET",
                headers: HEADERS
            });

            const data = await response.json();

            return {
                query: { 
                    id: 0,
                    keywords,
                    cuisine,
                    totals: data.totalResults,
                    expires: data.expires
                } as RecipeSearchQuery,
                
                recipes: data.results.map((recipe: any) => ({
                    id: recipe.id,
                    name: recipe.title,
                    prepMinues: recipe.readyInMinutes,
                    imageFileName: recipe.image,
                    servings: 0
                })) as Recipe[]
            };
        } catch (error) {
            throw new Error(error);
        }
    }
}
