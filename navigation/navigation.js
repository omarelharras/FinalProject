import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";

import LoginFormScreen from "../screens/login-screen";
import HomePageScreen from "../screens/home-screen";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? "#1E90FF" : "",
  },

  headerTintColor: Platform.OS === "android" ? "white" : "#1E90FF",
};

const navigator = createStackNavigator(
  {
    LoginForm: LoginFormScreen,
    HomePage: HomePageScreen,

  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

export default createAppContainer(navigator);
