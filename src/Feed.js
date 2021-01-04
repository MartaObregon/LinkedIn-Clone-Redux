import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventIcon from '@material-ui/icons/Event';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase'
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';

function Feed() {
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState("")
    const user = useSelector(selectUser)

    

    useEffect(()=>{
        db.collection("posts")
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot)=>
        setPosts(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }))
        )
        )
    }, [input])

    const sendPost = e => {
        e.preventDefault();
        db.collection("posts").add({
            name: user.displayName,
            description:user.email,
            message: input,
            photoUrl: user.photoUrl || "", 
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
            
        })

        setInput('')
    } 

    return (
        <div className="feed">
           <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon/>
                    <form>
                        <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Write a post" type="text"/>
                        <button onClick={sendPost} type= "submit" >Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">

                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                    <InputOption Icon={YouTubeIcon} title="Video" color="#E7A33E"/>
                    <InputOption Icon={EventIcon} title="Event" color="#C0cBCD"/>
                    <InputOption Icon={CalendarViewDayIcon} title="write article" color="#7FC15E"/>

                </div>
           </div> 
           {posts.map(({id, data: {name, description, message, photoUrl}})=>{
               return (
            <Post
            key = {id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
               />)
               
           })}
         
        </div>
    )
}

export default Feed
