import React,{forwardRef} from 'react';
import {Card,CardContent,Typography} from '@material-ui/core';
import './Message.css';




const Message=forwardRef(({username,message},ref)=>{
	const isUser=username===message.username;

{/*the content is message.message because our key in the database is message*/}
{/*the content is message.username because our key 
in the database is username*/}

	return(
		<div ref={ref} className={`message ${isUser && 'message_user'}`}>	
    <Card  className={isUser ? "message_userCard":"message_guestCard"}>
      <CardContent>
        <Typography 
        color="black"
        component="h2"
        variant="h5">
        {!isUser && `${message.username || 'unknown user'}:`}{message.message}
       
        
        </Typography>
      </CardContent>
    </Card>

</div>









		

		)
})
export default Message;
