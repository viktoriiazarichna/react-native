import React from 'react';
import { StyleSheet, View} from 'react-native';
import UsersComponent from "./src/api/components/UsersComponent";
import UserDetailsComponent from "./src/api/components/UserDetailsComponent";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";


let StackNavigator = createStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
        <StackNavigator.Navigator>
            <StackNavigator.Screen name={'Users'} component={UsersComponent}/>
            <StackNavigator.Screen name={'UserDetails'} component={UserDetailsComponent}/>

            </StackNavigator.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({});

