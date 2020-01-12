import React from "react";
import { enableScreens } from "react-native-screens";
import { createAppContainer, NavigationContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Provider } from "react-redux";
import store from "store/reducers";
import MainScreen from "components/main-screen/MainScreen";
import SearchResultsScreen from "components/search-results-screen/SearchResultsScreen";

// set up app to use native screens (Activities/UIViews)
enableScreens();

// create navigation object to handle stack of screens
const appNavigator = createStackNavigator(
	{
        Main: MainScreen,
        SearchResults: SearchResultsScreen
	},
	{ 
		initialRouteName: "Main",
		headerMode: "none"
	}
)

// create component that will display the different screens
const Navigator: NavigationContainer = createAppContainer(appNavigator);

// root component with redux store provider and navigation container
export default function App() {
	return (
		<Provider store={store}>
			<Navigator/>
		</Provider>
	);
};
