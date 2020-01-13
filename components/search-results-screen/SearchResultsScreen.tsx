import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import Header from 'components/Header';

function SearchResultsScreen({query}: any) {
    return (
        <View>
            <Header title="Search Results"/>
        </View>
    );
}

function mapStateToProps(state: any) {
    return {
        query: state.query
    }
}

export default connect(mapStateToProps)(SearchResultsScreen)