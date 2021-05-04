import React from 'react';

import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import PostsComponent from "./src/api/components/PostsComponent";
import PostDetailsComponent from "./src/api/components/PostDetailsComponent";

let StackNavigator = createStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
        <StackNavigator.Navigator>
            <StackNavigator.Screen name={'Posts'} component={PostsComponent}/>
            <StackNavigator.Screen name={'PostDetails'} component={PostDetailsComponent}/>
        </StackNavigator.Navigator>
    </NavigationContainer>

  );
}



