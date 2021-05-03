import React, {useEffect, useState} from "react";
import {FlatList, StyleSheet, View, Text, Button} from 'react-native';

import {getUsers} from "../API";
import UserComponent from "./UserComponent";

const UsersComponent = (props) => {

    const {navigation} = props;

    let [users, setUsers] = useState([]);

    console.log(users);

    async function fetchData() {
        let users = await getUsers();
        setUsers( [...users]);
    }

    useEffect(()=> {
        fetchData();
    }, []);


    return <View>
        <FlatList data={users}
                  renderItem={({item}) => {return <UserComponent nav={navigation} item={item}/>;} } keyExtractor={item => ''+ item.id }/>
    </View>;

}

export default UsersComponent;

let styles = StyleSheet.create({});