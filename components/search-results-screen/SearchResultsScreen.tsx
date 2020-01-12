import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

function SearchResultsScreen({query}: any) {
    return (
        <View>
            <Text>{query.keywords}</Text>
            <Text>{query.cuisine}</Text>
        </View>
    );
}

function mapStateToProps(state: any) {
    return {
        query: state.query
    }
}

export default connect(mapStateToProps)(SearchResultsScreen)