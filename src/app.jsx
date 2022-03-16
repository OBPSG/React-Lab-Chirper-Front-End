import React from 'react';
import Post from './components/post';

function App() {
    return (
        <div>
            <h1>Latest Posts on Chirper:</h1>
            <Post userName="OBP Super Gamer" body="Video Games are lots of fun!"></Post>
            <Post userName="Leftover Sundriez Man" body="I like to listen to electronic music!"></Post>
            <Post userName="Some other Rando" body="This is a test post!"></Post>
        </div>
    );
}

export default App;