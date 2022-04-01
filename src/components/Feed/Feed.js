import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Post from '../Post/Post';

import classes from './Feed.module.css';

const Feed = () => {
    const [posts, setPosts] = useState(<p>No loaded post!</p>);
    useEffect(() => {
        const fetchPosts = async() => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                let loadedPosts = data.map(post => {
                    return <Link className={classes.Link} to={'/' + post.id} key={post.id}>
                    <Post post={post} />
                    </Link>
                });
                setPosts(loadedPosts);
            } catch(err) {
                console.log(err);
            }
        }
        fetchPosts()
    }, []);
    return (
        <div className={classes.Feed}>
            {posts}
        </div>
    );
};

export default Feed;