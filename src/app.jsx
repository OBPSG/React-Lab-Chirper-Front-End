import React from 'react';
import Moment from 'react-moment';
import Post from './components/post';

function App() {
    const initialPostArr = [
        {
            userName: "Some Rando",
            body: "This is a test post!",
            time: "2022-03-16T17:30"
        },
        {
            userName: "OBP Super Gamer",
            body: "Video Games are lots of fun!",
            time: "2022-03-16T17:42"
        },
        {
            userName: "Leftover Sundriez Man",
            body: "I like to build stuff and listen to electronic music!",
            time: "2022-03-16T18:12"
        }
    ];

    const [postList, setPostList] = React.useState(initialPostArr);
    let postKey = 0;
    const [userName, setUserName] = React.useState("");
    const [postText, setPostText] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Post button clicked!");
        const newPostList = [{
            userName: userName,
            body: postText,
            
        }].concat(postList);
        setPostList(newPostList);
        setUserName("");
        setPostText("");
    }

    return (
        <div className="container">
            <h1>Latest Posts on Chirper:</h1>
            {postList.map((post) => {postKey += 1;
                return <Post key={postKey} userName={post.userName} body={post.body} time={post.time}></Post>})}
            <form className="form-group col-9 mt-4" onSubmit={handleSubmit}>
                <label htmlFor="userName">User Name:</label>
                <input value={userName} onChange={(event) => setUserName(event.target.value)} type="text" className="form-control w-50" id="userName" name="userName"></input>
                <input value={postText} onChange={(event) => setPostText(event.target.value)} type="text" className="form-control" placeholder="Post text here..."></input>
                <input type="submit" className="form-control mt-2"></input>
            </form>
        </div>
    );
}

export default App;