import React from "react";
import PropTypes from "prop-types";
import { Text, ActivityIndicator, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CancelIcon from "assets/icons/cancel.svg";
import mainStyles, { Colors, Dimens } from "styles/Main";

export default function LoadMoreButton({ status, message, loadAction }: any) {
    let button = null;

    switch (status) {
        case "loading":
            button = (
                <View style={[mainStyles.button, mainStyles.buttonLoading]}>
                    <ActivityIndicator size="large" color={Colors.neutral}/>
                </View>
            ); break;

        case "error":
            button = (
                <View style={[mainStyles.button, mainStyles.buttonError]}>
                    <CancelIcon
                        style={[mainStyles.buttonErrorChild, mainStyles.buttonErrorIcon]}
                        width={Dimens.buttonSizeMain}
                        height={Dimens.buttonSizeMain}
                        fill={Colors.error}/>
                    <Text style={mainStyles.buttonErrorChild} numberOfLines={2}>{message} Press to retry!</Text>
                </View>
            ); break;

        case "success": default:
            button = <Text style={mainStyles.button}>Load More</Text>; break;
    }

    return (
        <TouchableOpacity onPress={loadAction}>
            {button}
        </TouchableOpacity>
    );
};

LoadMoreButton.propTypes = {
    status: PropTypes.string.isRequired,
    message: PropTypes.string,
    loadAction: PropTypes.func.isRequired
};
