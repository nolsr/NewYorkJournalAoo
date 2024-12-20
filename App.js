import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import IndexScreen from "./src/screens/IndexScreen";
import ViewScreen from "./src/screens/ViewScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
// renaming a generic import to something more specific
import { Provider as DiaryProvider } from "./src/context/DiaryContext";
import ErrorDisplay from "./src/components/ErrorDisplay";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    View: ViewScreen,
    Create: CreateScreen,
    Edit: EditScreen,
  },
  {
    initialRouteName: "Index",
    headerMode: "none",
    defaultNavigationOptions: {
      title: "New York Diary",
    },
  }
);

const App = createAppContainer(navigator);
export default () => {
  return (
    <DiaryProvider>
      <ErrorDisplay />
      <App />
    </DiaryProvider>
  );
};
