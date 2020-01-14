import React from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import Header from "components/Header";
import Placeholder from "components/search-results-screen/Placeholder";
import mainStyles from "styles/Main";

function SearchResultsScreen({query}: any) {
    return (
        <View>
            <Header title="Search Results"/>
            <View style={mainStyles.component}>
                <Placeholder/>
                <Placeholder/>
            </View>
        </View>
    );
}

function mapStateToProps(state: any) {
    return {
        query: state.query
    }
}

export default connect(mapStateToProps)(SearchResultsScreen)
