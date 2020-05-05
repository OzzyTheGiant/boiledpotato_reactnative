export interface Recipe {
    id: number;
    name: string;
    servings: number;
    prepMinutes: number;
    imageFileName: string;
    isFavorite?: boolean
    ingredients?: string[];
    instructions?: string[];
}