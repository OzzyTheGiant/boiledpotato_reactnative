import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import UnorderedList from "react-native-unordered-list";
import mainStyles from "styles/Main";
import recipeStyles from "styles/Recipe";
import Placeholder from "components/search-results-screen/Placeholder";

export default function RecipeDetailsList({ heading, textList, status, hasBackground } : any) {
    const headingStyles = [mainStyles.component, recipeStyles.detailsHeading];
    const textContainerStyles = [mainStyles.component];

    if (hasBackground) {
        headingStyles.push(recipeStyles.detailsBackground as any);
        textContainerStyles.push(recipeStyles.detailsBackground as any);
    }
    
    return (
        <Fragment>
            <Text style={headingStyles}>
                {heading}
            </Text>
            <View style={textContainerStyles}> 
            { status === "success" ?
                textList.map((listItem: string, i: number) => 
                    <UnorderedList key={i}>
                        <Text>{listItem}</Text>
                    </UnorderedList>
                )
                :
                <Fragment>
                    <Placeholder textSize/>
                    <Placeholder textSize/>
                </Fragment>
            }
            </View>
        </Fragment>
    );
};

RecipeDetailsList.propTypes = {
    heading: PropTypes.string.isRequired,
    textList: PropTypes.arrayOf(PropTypes.string),
    status: PropTypes.string.isRequired,
    hasBackground: PropTypes.bool
};

RecipeDetailsList.defaultProps = {
    hasBackground: false
};
