import React from "react";
import PropTypes from "prop-types";
import { View, Text, Button } from "react-native";
import ErrorIcon from "assets/icons/cancel.svg";
import mainStyles, { Dimens, Colors } from "styles/Main";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ErrorNotification({ message, retryAction }: any) {
    return (
        <View style={mainStyles.errorNotification}>
            <ErrorIcon
                width={Dimens.buttonSizeCuisine}
                height={Dimens.buttonSizeCuisine}
                fill={Colors.error}/>
            <Text style={mainStyles.errorText} numberOfLines={3}>{message} Try again.</Text>
            <TouchableOpacity onPress={retryAction}>
                <Text style={[mainStyles.button, mainStyles.buttonFitted]}>Retry</Text>
            </TouchableOpacity>
        </View>
    );
}

ErrorNotification.propTypes = {
    message: PropTypes.string.isRequired,
    retryAction: PropTypes.func.isRequired
};
