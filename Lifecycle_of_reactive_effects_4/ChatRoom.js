import { useState, useEffect } from 'react';
import {
  createEncryptedConnection,
  createUnencryptedConnection,
} from './chat.js';

export default function ChatRoom({ roomId, encryption }) {
  useEffect(() => {
    const createConnection = encryption?createEncryptedConnection:createUnencryptedConnection;
    
    const connection = createConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
    
  }, [roomId, encryption]);

  return <h1>Welcome to the {roomId} room!</h1>;
}
