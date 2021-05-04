import React, {useEffect} from 'react';
import {View, Text} from "react-native";


const PostDetailsComponent = ({route, navigation}) => {

    let {params: {data}} = route;

    useEffect (() => {
        navigation.setOptions({title: data.title})
    }, []);

    return <View>
        <Text>{data.body} </Text>

    </View>

}

export default PostDetailsComponent;