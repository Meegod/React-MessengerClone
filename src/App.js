import React,{useState,useEffect} from 'react';
import './App.css';
import Message from './Message';
import { Button,FormControl,InputLabel,Input  } from '@material-ui/core';
import {db} from './firebase';
import firebase  from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';



function App() {
const[input,setInput]=useState('');
//the piece of state where we store message
const[messages,setMessages]=useState([]);
const[username,setUsername]=useState('');


//useState is a variable in react
//useffect is like the component did mount on react class base
//component.

  useEffect(()=>{
//when the apps loads
db.collection('messages')
.orderBy('timestamp','desc')
.onSnapshot(snapshot=>{
  //ordering and destructuing an object--this is how udo it
  setMessages(snapshot.docs.map(doc=>({id:doc.id,message:doc.data()})
    ))
})
  },[]);





 






useEffect(()=>{
//run somep
setUsername(prompt('please enter your name'));

  


},[])

const sendMessage=(event)  =>{
  event.preventDefault();
//all the logic to send a message goes
//The username key is thesame as the key in the databse
//The input key is thesame as the message typed in the input field
  db.collection('messages').add({
    message:input,
    username:username,
    timestamp:firebase.firestore.FieldValue.serverTimestamp()
})

//code for setting the state locally..
//setMessages([...messages,{username:username,message:input}]);
setInput('');
  


  }


  return (
    <div className="App">
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fseeklogo.net%2Fwp-content%2Fuploads%2F2016%2F11%2Ffacebook-messenger-logo-preview-200x200.png&f=1&nofb=1"
className="messenger_image"
    />
     <h2 className="text-center">Hello {username}</h2>
 <form className="app_form">
 <FormControl className="app_formControl">
  <Input 
  placeholder="Enter a Message..."
  value={input}
  className="app_Input"
onChange={event=>setInput(event.target.value)} />

<IconButton 
className="app_Iconbutton"
variant="contained" color="primary" disabled={!input}
type="submit" onClick={sendMessage}>
<SendIcon/>
</IconButton>
</FormControl>
 </form>
<FlipMove>
   {

   messages.map(({id,message})=>(
    <Message  key={id}  username={username} message={message}/>

    ))

  }
  </FlipMove>


    </div>
  );
}

export default App;
