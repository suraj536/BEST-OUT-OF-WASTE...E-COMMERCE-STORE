import React, { useState, useEffect } from "react";
import axios from "axios";

const MessageList = ({ userId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`/api/messages/${userId}`);
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, [userId]);

  return (
    <div>
      <h2>Message List</h2>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <strong>From:</strong> {message.senderName}
            <br />
            <strong>Content:</strong> {message.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;
