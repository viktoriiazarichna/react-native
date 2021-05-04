import axios from 'axios';


let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

const getPosts = async() => {
    let {data} = await axiosInstance('/posts');
    return data;
}

const getPost = async (id) => {
    let {data} = await axiosInstance(`/posts/${id}`);
    return data;
}

export{getPosts, getPost};
