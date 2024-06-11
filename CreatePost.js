import React from "react";
import '../App.css';
import {addDoc,collection} from 'firebase/firestore'
import {db,auth }  from "../firebase-config";
import {useNavigate} from "react-router-dom"; 
import {useState,useEffect} from "react"

 function CreatePost({isAuth})
 {
const [title,setTitle]=useState("");
const [postText,setPostText]=useState("");

const postsCollectionRef= collection(db,"posts");
let navigate=useNavigate();
const createPost=async()=>{
await addDoc(postsCollectionRef,
{
   title,
   postText,
   author:{name:auth.currentUser.displayName,id:auth.currentUser.uid},});

   navigate("/");
};
useEffect(()=>{
if(!isAuth){
    navigate("/login");
}
},[]);

 	return <div className="createPostPage">
     <h2>Welcome to Student Voices</h2>
<div id="para"><p> We believe that every student has a unique perspective and a valuable voice. 
Our platform is dedicated to fostering open dialogue and the exchange of diverse ideas among the vibrant community of students on our campus.
Students can express their opinions on current events, campus policies, or controversial topics through blog posts </p></div>


    <div className="cpContainer">
      <h1> Create A Post </h1>
<div className="inputGp">
 <label> Title:</label>
 <input placeholder="Title..."  onChange={(event)=>{
 setTitle(event.target.value);
 }}/>
</div>

<div className="inputGp">
 <label> Post:</label>
 <textarea placeholder="Post..."  onChange={(event)=>{
 setPostText(event.target.value);
 }}/>
</div>
<button onClick={createPost}> Submit Post</button>
</div>
    </div>;
 }

export default CreatePost;