import React, {useEffect, useState} from "react";
import {getPosts} from "../API";
import {FlatList, View} from "react-native";
import PostComponent from "./PostComponent";


const PostsComponent = (props) => {
    const {navigation} = props;

    let [posts, setPosts] = useState([]);

    const fetchData = async () => {
        let posts = await getPosts();
        setPosts ([...posts]);
    }

    useEffect( () => {
        fetchData()
    }, [])

    return <View>

        <FlatList data={posts} renderItem={({item}) => {return <PostComponent nav={navigation} item={item} /> }} keyExtractor={item => ''+ item.id}/>
    </View>



}

export default PostsComponent;
