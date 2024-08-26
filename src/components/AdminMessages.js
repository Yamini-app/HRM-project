import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import '../styles/AdminMessages.css';
import { getmessages } from '../api/api';

const AdminMessages = () => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        getmessages().then((res)=>{
            setMessages(res.data);
        })
    }, []);

    return (
        <div className="admin-messages">
            <Sidebar />
            <div className="main-content">
                <Navbar />
                <div className="messages-content">
                    <h1>Messages from Employees</h1>
                    {messages  && messages.length > 0 ? (
                        <ul>
                            {messages.map((msg, index) => (
                                <li key={index}>
                                    <p><strong>{msg.employeeId}:</strong> {msg.message}</p>
                                    <p><em>{msg.updatedAt}</em></p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No messages from employees.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminMessages;
