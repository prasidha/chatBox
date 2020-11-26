import React, { useEffect, useState } from 'react';
import './App.css';
import { FormControl,Input } from '@material-ui/core'
import Message from './Message';
import db from './firebase';
import firebase from 'firebase'
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send'
import IconButton from '@material-ui/core/IconButton'
import ChatIcon from '@material-ui/icons/Chat';

function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('')

  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
    })
  }, [])

  useEffect(() => {
    setUsername(prompt('Please enter your name'))
  }, [])

  const sendMessage = (e) => {
    e.preventDefault()

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('')
  }

  return (
    <div className="App">
       <h1>Chat Box<ChatIcon style={{ fontSize: 40,color:'blue' }} /></h1>
      
      <h2>Welcome {username}</h2>

      <form className='form' >
        <FormControl className='formControl' >
          <Input className='input' placeholder='Enter a message' value={input} onChange={(e) => setInput(e.target.value)} />
          <IconButton className='iconButton' variant='text' color='primary' disabled={!input} onClick={sendMessage} type="submit" >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {
          messages.map(({ id, message }) => (
            <Message key={id} message={message} username={username} />
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;
