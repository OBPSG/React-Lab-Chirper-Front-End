import React from 'react';

function Post(props) {
    return(
        <div className="card col-9 mt-2">
            <h2 className="card-title">{props.userName}</h2>
            <p className="card-body">{props.body}</p>
        </div>
    );
}

export default Post;