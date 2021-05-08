import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import PostsComponent from "./src/api/components/PostsComponent";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import UserDrawer from "./src/api/components/UserDrawer";
import CameraComponent from "./src/api/components/CameraComponent";

let BottomTabNavigator = createBottomTabNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <BottomTabNavigator.Navigator tabBarOptions={{tabStyle: {justifyContent: 'center', alignItems: 'center' } }}>
        <BottomTabNavigator.Screen name={'posts'} component={PostsComponent}/>
        <BottomTabNavigator.Screen name={'users'} component={UserDrawer}/>
          <BottomTabNavigator.Screen name={'camera'} component={CameraComponent} options={{unmountOnBlur: true}}/>
      </BottomTabNavigator.Navigator>

    </NavigationContainer>

  );
}



