import React from "react";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";
import recipeListStyles from "styles/RecipeList";
import { Colors, Dimens } from "styles/Main";

export default function Placeholder() {
    return (
        <ShimmerPlaceHolder
            autoRun={true}
            width={Dimens.placeHolderWidth}
            height={Dimens.placeHolderHeight}
            widthShimmer={Dimens.shimmerWidth}
            colorShimmer={[
                Colors.placeholder,
                Colors.white,
                Colors.placeholder
            ]} 
            style={recipeListStyles.placeholder}/>
    );
}
