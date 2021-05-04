import React from "react";
import {View, Text, Button} from "react-native";
import {StyleSheet} from 'react-native';



const PostComponent = (props) => {

    const {item, nav} = props;

    return <View style={[styles.box]}>
        <Text> title: {item.title}</Text>
        <Text> body: {item.body}</Text>
        <Button title={'post details'} onPress={() => {
            nav.navigate('PostDetails', {data: item})
            }}/>
    </View>;

};
export default PostComponent;

let styles = StyleSheet.create({
        box: {
            height: 200,
            backgroundColor: 'green',
            marginBottom: 5,
            textAlign: 'center'
        },

});

