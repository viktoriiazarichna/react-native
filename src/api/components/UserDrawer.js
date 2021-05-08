import React from "react";

import {createDrawerNavigator} from "@react-navigation/drawer";

import UsersComponent from "./UsersComponent";
import TemplateComponent from "./TemplateComponent";


const Drawer = createDrawerNavigator();

const UserDrawer = () => {

    return (
        <Drawer.Navigator>
            <Drawer.Screen name={'users'} options={{title: 'users'}} component={UsersComponent}/>
            <Drawer.Screen name={'template'} options={{title: 'template'}} component={TemplateComponent}/>
        </Drawer.Navigator>
    );
};


export default UserDrawer;