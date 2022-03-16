import React from 'react';
import Post from './components/post';

function App() {
    const postArr = [
        {
            userName: "Some Rando",
            body: "This is a test post!"
        },
        {
            userName: "OBP Super Gamer",
            body: "Video Games are lots of fun!"
        },
        {
            userName: "Leftover Sundriez Man",
            body: "I like to build stuff and listen to electronic music!"
        }
    ];

    return (
        <div className="container">
            <h1>Latest Posts on Chirper:</h1>
            {postArr.map((post) => {return <Post userName={post.userName} body={post.body}></Post>})}
        </div>
    );
}

export default App;