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
        //console.log("Post button clicked!");
        if (userName !== "" && postText !== "") {
            const newPostList = [{
                userName: userName,
                body: postText,

            }].concat(postList);
            setPostList(newPostList);
            setUserName("");
            setPostText("");
        }
    }

    return (
        <div className="container">
            <h1>Latest Posts on Chirper:</h1>
            {postList.map((post) => {
                postKey += 1;
                return <Post key={postKey} userName={post.userName} body={post.body} time={post.time}></Post>
            })}
            <form className="form-group col-md-9 mt-4" onSubmit={handleSubmit}>
                <label>Create New Post</label>
                <input value={userName} onChange={(event) => setUserName(event.target.value)} type="text" className="form-control w-50" id="userName" name="userName" placeholder="User Name"></input>
                <textarea value={postText} onChange={(event) => setPostText(event.target.value)} type="text" className="form-control" placeholder="Post text here..."></textarea>
                <input type="submit" value="Post" className="btn mt-2 px-5 bg-success text-white"></input>
            </form>
        </div>
    );
}

export default App;