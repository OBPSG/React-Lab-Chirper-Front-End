import React from 'react';
import Moment from 'react-moment';

function Post(props) {
    return (
        <div className="card col-md-9 mt-3 shadow border-primary">
            <h2 className="card-title mx-2">{props.userName}</h2>
            <div className="card-body">
                <p>{props.body}</p>
            </div>
            <h6 className="card-footer text-muted">Posted on <Moment>{props.time}</Moment></h6>
        </div>
    );
}

export default Post;