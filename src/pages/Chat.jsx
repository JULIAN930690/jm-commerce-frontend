import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chat = ({ userId, receiverId }) => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  const BASE_URL = import.meta.env.VITE_API_URL || 'https://jm-commerce-backend.vercel.app/api';

  useEffect(() => {
    axios
      .get(`${BASE_URL}/chat/${userId}/${receiverId}`)
      .then((res) => setMessages(res.data));
  }, [userId, receiverId]);

  const sendMessage = async () => {
    if (!text.trim()) return;
    const msg = { sender_id: userId, receiver_id: receiverId, message: text };
    await axios.post(`${BASE_URL}/chat/send`, msg);
    setMessages((prev) => [...prev, msg]);
    setText('');
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-2">Chat</h2>
      <div className="border p-2 h-64 overflow-y-auto bg-white rounded-lg">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-2 ${msg.sender_id === userId ? 'text-right' : ''}`}>
            <span className="inline-block bg-gray-200 px-3 py-1 rounded">{msg.message}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 flex">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-grow p-2 border rounded-l"
          placeholder="Escribe un mensaje..."
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white px-4 rounded-r">
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Chat;
