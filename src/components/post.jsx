import React from 'react';
import Moment from 'react-moment';

function Post(props) {
    return(
        <div className="card col-9 mt-2">
            <h2 className="card-title">{props.userName}</h2>
            <p className="card-body">{props.body}</p>
            <h6>Posted on <Moment>{props.time}</Moment></h6>
        </div>
    );
}

export default Post;