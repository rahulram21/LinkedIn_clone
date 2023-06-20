import React, { useEffect, useState } from 'react';
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import { db } from './Firebase'
import { doc, setDoc, Timestamp, onSnapshot, collection } from "firebase/firestore"; 
import Post from './Post';

function Feed() {

    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     db.collection('posts').onSnapshot((snapshot) => {
    //         setPosts(snapshot.docs.map((doc) => ({
    //             id: doc.id,
    //             data: doc.data(),
    //         })))
    //     })
    // },[])

    useEffect ( () => {
        onSnapshot(collection(db, 'posts'), (snapshot) => {
            setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            })))
            // snapshot.docs.forEach((doc) => {
            //     console.log(doc.id)
            //     console.log(doc.data())
            // })
        })
    } )

    const sendPost = e => {
        e.preventDefault();
        setDoc(doc(db,'posts','w2Oc7Hi7yRxqwOkc7zD6'), {
            name: 'test',
            description: 'test test',
            message: input,
            photoUrl: 'https',
            timestamp: Timestamp.now(),
        })
    }
  return (
    <div className='feed'>
        <div className='feed__inputContainer'>
            <div className='feed__input'>
                <CreateIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)}  type='text' />
                    <button onClick={sendPost} type='submit'>send</button>
                </form>
            </div>
            <div className='feed__inputOptions'>
                <InputOption Icon={ImageIcon} title='Photo' color='#A2D2FF'/>
                <InputOption Icon={SubscriptionsIcon} title='Video' color='#FFAFCC'/>
                <InputOption Icon={EventNoteIcon} title='Event' color='#CDB4DB'/>
                <InputOption Icon={CalendarViewDayIcon} title='Write Article' color='#E76F51'/>
            </div>
        </div>
        {posts.map(({ id , data : {name, description, message, photoUrl }}) => (
            <Post 
                key={id} name={name} description={description} message={message} photoUrl={photoUrl}
            />
        ))}
    </div>
  )
}

export default Feed;