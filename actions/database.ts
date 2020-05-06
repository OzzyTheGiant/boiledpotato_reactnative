import * as SQLite from "expo-sqlite";
import { RecipeSearchQuery } from "models/RecipeSearchQuery";
import { Recipe } from "models/Recipe";
import { WebSQLDatabase } from "expo-sqlite";

const db : WebSQLDatabase = SQLite.openDatabase("BoiledPotato", "1");

// Create database tables
db.transaction(
    (transaction: SQLTransaction) => {
        transaction.executeSql(`
            CREATE TABLE IF NOT EXISTS SearchQueries(
                id INTEGER PRIMARY KEY,
                keywords TEXT NOT NULL,
                cuisine VARCHAR(10) NOT NULL DEFAULT "",
                totals INT NOT NULL DEFAULT 0,
                expires BIGINT NOT NULL DEFAULT 0,
                UNIQUE (id) ON CONFLICT REPLACE,
                UNIQUE (keywords, cuisine) ON CONFLICT REPLACE
            );
        `);
            
        transaction.executeSql(`
            CREATE TABLE IF NOT EXISTS Recipes(
                id INT,
                name TEXT NOT NULL,
                prepMinutes INT NOT NULL DEFAULT 0,
                imageFileName TEXT NOT NULL,
                servings INT NOT NULL DEFAULT 0,
                ingredients TEXT,
                instructions TEXT,
                isFavorite INT NOT NULL DEFAULT 0,
                UNIQUE (id) ON CONFLICT REPLACE
            );
        `);

        transaction.executeSql(`
            CREATE TABLE IF NOT EXISTS SearchResults(
                queryId INTEGER,
                recipeId INTEGER,
                FOREIGN KEY(queryId) REFERENCES SearchQueries(id),
                FOREIGN KEY(recipeId) REFERENCES Recipes(id),
                UNIQUE (queryId, recipeId) ON CONFLICT REPLACE
            );
        `);
    }
);

export function fetchSearchQuery(keywords: string, cuisine: string) : Promise<any> {
    return new Promise((resolve, reject) => {
        db.transaction(
            // SQL Query
            (tx: SQLTransaction) => {
                tx.executeSql(
                    "SELECT * FROM SearchQueries WHERE keywords = ? AND cuisine = ?",
                    [keywords, cuisine],

                    (tx: SQLTransaction, result: SQLResultSet) => { 
                        resolve(result.rows.item(0)) 
                    }
                );
            },
            (error) => reject(error)
        );
    });
}

export function fetchRecipesByQuery(id: number, limit: number, offset: number) : Promise<any> {
    return new Promise((resolve, reject) => {
        db.transaction(
            // SQL Query
            (tx: SQLTransaction) => {
                tx.executeSql(
                    `SELECT R.* FROM Recipes as R JOIN SearchResults as S ON S.recipeId = R.id
                    WHERE S.queryId = ? LIMIT ? OFFSET ?`,
                    [id, limit, offset],

                    (tx: SQLTransaction, result: SQLResultSet) => {
                        // convert ingredient and instruciton strings to arrays before resolving
                        resolve((result.rows as any)._array.map((recipe: any) => {
                            recipe.ingredients = recipe.ingredients?.split("#!") ?? null;
                            recipe.instructions = recipe.instructions?.split("#!") ?? null;
                            return recipe;
                        }));
                    }
                );
            },
            (error) => reject(error)
        );
    });
}

export function updateRecipe(id: number, r: any) : Promise<void> {
    return new Promise((resolve, reject) => {
        db.transaction(
            // SQL Query
            (tx: SQLTransaction) => {
                tx.executeSql(
                    `UPDATE Recipes SET 
                        servings = ?, 
                        ingredients = ?, 
                        instructions = ?
                    WHERE id = ?;`,
                    [
                        r.servings, 
                        r.ingredients?.join("#!") ?? null, 
                        r.instructions?.join("#!") ?? null, 
                        id
                    ]
                );
            },
            (error) => reject(error)
        );
    });
}

export function toggleRecipeAsFavorite(id: number, isFavorite: boolean) : Promise<number> {
    return new Promise((resolve, reject) => {
        db.transaction(
            // SQL Query
            (tx: SQLTransaction) => {
                tx.executeSql(
                    "UPDATE Recipes SET isFavorite = ? WHERE id = ?",
                    [isFavorite ? 1 : 0, id],

                    (tx: SQLTransaction, result: SQLResultSet) => {
                        resolve(result.rowsAffected);
                    }
                );
            },
            (error) => reject(error)
        );
    });
}

export function saveAll(q: RecipeSearchQuery, recipes: Recipe[]) : Promise<void> {
    return new Promise((resolve, reject) => {
        db.transaction(
            // SQL Query
            (tx: SQLTransaction) => {
                tx.executeSql(
                    `INSERT INTO SearchQueries VALUES(NULL, ?, ?, ?, ?)`,
                    [q.keywords, q.cuisine, q.totals, q.expires],
                
                    // wait until first query finishes to get query id to add to search results
                    (tx: SQLTransaction, result: SQLResultSet) => {
                        for (let i = 0; i < recipes.length; ++i) {
                            const r = recipes[i];
        
                            tx.executeSql(
                                `INSERT INTO Recipes (id, name, prepMinutes, imageFileName, servings) 
                                VALUES(?, ?, ?, ?, ?)`,
                                [r.id, r.name, r.prepMinutes, r.imageFileName, r.servings]
                            );
        
                            tx.executeSql(
                                `INSERT INTO SearchResults VALUES(?, ?)`,
                                [result.insertId, r.id]
                            );
                        }
                    }
                );

            },
            (error) => reject(error)
        );
    });
}
