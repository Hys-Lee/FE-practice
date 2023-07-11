import { useState } from 'react';

export default function Chat({contact, message, dispatch}) {
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={(e) => {
          dispatch({
            type: 'edited_message',
            message: e.target.value,
          });
        }}
      />
      <br />
      <button onClick={()=>{
        dispatch({
          type:'sended_message',
          email:contact.email
        });
      }}>
        Send to {contact.email}
      </button>
    </section>
  );
}
