import React, { Fragment, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Text, Image, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import EasyToast from "react-native-easy-toast";
import { Recipe } from "models/Recipe";
import * as actionCreator from "actions/actions";
import Header from "components/Header";
import ErrorNotification from "components/ErrorNotification";
import RecipeDetailsList from "components/recipe-screen/RecipeDetailsList";
import ServingsIcon from "assets/icons/room-service.svg";
import TimeIcon from "assets/icons/access-time.svg";
import mainStyles, { Dimens, Colors } from "styles/Main";
import recipeStyles from "styles/Recipe";

const BASE_URL = "https://spoonacular.com/recipeImages";

function RecipeScreen({ navigation, recipeData, resource, fetchRecipeDetails, toggleAsFavorite }: any) {
    const recipe = recipeData as Recipe;
    const Toast : any = EasyToast
    const toast : React.MutableRefObject<EasyToast | null> = useRef(null);

    // check if recipe has additional details and if not fetch from repository
    useEffect(() => {
        if (!recipe.servings || !recipe.ingredients || !recipe.instructions) {
            fetchRecipeDetails(recipe.id);
        }
    }, []);

    // on press favorite button, toggle button icon and make change in database
    function favoriteButtonPresshandler() {
        const text = !recipe.isFavorite ? 
            "Marked recipe as favorite" : 
            "Removed recipe from favorites";

        toast.current?.show(text, 3000)
        toggleAsFavorite(recipe.id, recipe.isFavorite);
    }

    return (
        <ScrollView>
            <Header 
                overlay
                title=""
                unmark={!recipe.isFavorite}
                backButtonAction={() => navigation.goBack()} 
                favoriteButtonAction={favoriteButtonPresshandler}/>
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
            <Toast 
                ref={toast}
                style={mainStyles.toast}
                positionValue={60}
                fadeInDuration={300}
                fadeOutDuration={300}/>
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
        },
        toggleAsFavorite: (id: number, isFavorite: boolean) => {
            dispatch(actionCreator.toggleRecipeAsFavorite(id, isFavorite));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeScreen);
