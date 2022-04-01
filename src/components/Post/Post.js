import React from 'react';

import classes from './Post.module.css';

const Post = props => {
    return (
    <div className={classes.Post}>
        <h1>{props.post.title}</h1>
    </div>
    );
};

export default Post;