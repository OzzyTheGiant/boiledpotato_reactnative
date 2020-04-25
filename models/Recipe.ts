export interface Recipe {
    id: number;
    name: string;
    servings: number;
    prepMinutes: number;
    imageFileName: string;
    ingredients?: string[];
    instructions?: string[];
}