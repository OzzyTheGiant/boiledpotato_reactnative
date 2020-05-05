import { RecipeSearchQuery } from "models/RecipeSearchQuery";
import { Recipe } from "models/Recipe";

const HEADERS = {
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    "X-RapidAPI-Key": "1b67721abbmshc3b7504817adbb8p159e5cjsn9dcca623b95c"
};

/** Fetch a list of recipes and its metadata from REST API */
export async function fetchRecipes(keywords: string, cuisine: string, offset: number) : Promise<any> {
    const url = `https://${HEADERS["X-RapidAPI-Host"]}/recipes/search`;
    const queryString = `?query=${keywords}&cuisine=${cuisine}&number=10&offset=${offset}`;
    
    try {
        const response = await fetch(url + queryString, {
            method: "GET",
            headers: HEADERS
        });

        const data = await response.json();

        if (data.status === 404) throw data.message || "A problem occurred on the server";

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
                prepMinutes: recipe.readyInMinutes,
                imageFileName: recipe.image,
                servings: 0
            })) as Recipe[]
        };
    } catch (error) {
        throw new Error(error);
    }
}

export async function fetchRecipeDetails(id: number) : Promise<any> {
    const url = `https://${HEADERS["X-RapidAPI-Host"]}/recipes/${id}/information`;
    
    try {
        const instructions : string[] = [];
        const response = await fetch(url, {
            method: "GET",
            headers: HEADERS
        });

        const data = await response.json();

        if (data.status === 404) throw data.message || "A problem occurred on the server.";
        
        // get all instructions from each set of instructions in the recipe and combine to one list
        data.analyzedInstructions.forEach((instructionSet: any) => {
            instructionSet.steps.forEach((instruction: any) => {
                instructions.push(instruction.step);
            });
        });

        return {
            servings: data.servings,
            ingredients: data.extendedIngredients.map((ingredient: any) => ingredient.originalString),
            instructions
        };

    } catch (error) {
        throw new Error(error);
    }
}
