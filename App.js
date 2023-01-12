import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SearchScreen from "./src/screens/SearchScreen";
import { ResturantDetailScreen } from "./src/screens/ResturantDetailScreen";

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResturantDetail: ResturantDetailScreen
}, {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
        title: 'Business Search',
        headerTitleAlign: 'center'
    }
})

export default createAppContainer(navigator);