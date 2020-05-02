import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Text, Image, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "components/Header";
import ErrorNotification from "components/ErrorNotification";
import Placeholder from "components/search-results-screen/Placeholder";
import ServingsIcon from "assets/icons/room-service.svg";
import TimeIcon from "assets/icons/access-time.svg";
import mainStyles, { Dimens, Colors } from "styles/Main";
import recipeStyles from "styles/Recipe";
import * as actionCreator from "actions/actions";
import { Recipe } from "models/Recipe";
import RecipeDetailsList from "./RecipeDetailsList";

const BASE_URL = "https://spoonacular.com/recipeImages";

function RecipeScreen({ navigation, recipeData, resource, fetchRecipeDetails }: any) {
    const recipe = recipeData as Recipe;

    useEffect(() => {
        fetchRecipeDetails(recipe.id);
    }, []);

    return (
        <ScrollView>
            <Header title="" backButtonAction={() => navigation.goBack()} overlay/>
            <Image style={recipeStyles.image} source={{uri: `${BASE_URL}/${recipe.imageFileName}`}}/>
            <Text style={[mainStyles.component, recipeStyles.title]}>{recipe.name}</Text>
            <View style={[mainStyles.component, recipeStyles.labels]}>
                <View style={recipeStyles.label}>
                    <ServingsIcon width={Dimens.iconSizeCuisine} height={Dimens.iconSizeCuisine} fill={Colors.primary}/>
                    <Text style={recipeStyles.labelText}>{ recipe.servings } Servings</Text>
                </View>
                <View style={recipeStyles.label}>
                    <TimeIcon width={Dimens.iconSizeCuisine} height={Dimens.iconSizeCuisine} fill={Colors.primary}/>
                    <Text style={recipeStyles.labelText}>{ recipe.prepMinutes } Min</Text>
                </View>
            </View>
            <View>
                { resource.status === "error" ?
                    <ErrorNotification message={resource.message} retryAction={() => fetchRecipeDetails(recipe.id)}/>
                :
                    <Fragment>
                        <RecipeDetailsList 
                            hasBackground
                            heading="Ingredients"
                            textList={recipe.ingredients || []}
                            status={resource.status}/>
                        <RecipeDetailsList 
                            heading="Instructions"
                            textList={recipe.instructions || []}
                            status={resource.status}/>
                    </Fragment>
                }
            </View>
        </ScrollView>
    );
};

function mapStateToProps(state: any) {
    return { 
        recipeData: state.selectedRecipe,
        resource: state.resource
    };
}

function mapDispatchToProps(dispatch: Function) {
    return {
        fetchRecipeDetails: (id: number) => {
            dispatch(actionCreator.getRecipeDetails(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeScreen);
