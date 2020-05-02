import React from "react";
import PropTypes from "prop-types";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";
import mainStyles, { Colors, Dimens } from "styles/Main";

export default function Placeholder({ textSize } : any) {
    let height, shimmer = [Colors.placeholder, Colors.white, Colors.placeholder];

    // determine if placeholer will be image or text placeholder
    if (textSize) {
        height = Dimens.placeHolderTextHeight;
        shimmer[0] = Colors.neutral;
    } else {
        height = Dimens.placeHolderHeight;
    }

    return (
        <ShimmerPlaceHolder
            autoRun
            width={Dimens.placeHolderWidth}
            height={height}
            widthShimmer={Dimens.shimmerWidth}
            colorShimmer={[
                Colors.placeholder,
                Colors.white,
                Colors.placeholder
            ]} 
            style={mainStyles.placeholder}/>
    );
}

Placeholder.propTypes = { textSize: PropTypes.bool };
Placeholder.defaultProps = { textSize: false };
