import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from './PostDetails.module.css';

const PostDetails = props => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async() => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
            const loadedPost = await response.json();
            setPost(loadedPost);
        }
        fetchPost();
    });

    return (
        <div className={classes.PostDetails}>
            {post ? (
            <div>
                <h2>({post.id}) {post.title}</h2>
                <div className={classes.Container}>
                    <p>{post.body}</p>
                </div>
            </div>
            ) : <p>Loading...</p>}
        </div>
    );
};

export default PostDetails;