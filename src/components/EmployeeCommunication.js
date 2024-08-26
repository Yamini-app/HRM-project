import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import '../styles/EmployeeCommunication.css';
import { storeemployeemessage } from '../api/api';

const EmployeeCommunication = ({ employeeId }) => {
    const [message, setMessage] = useState('');
    const dataString = localStorage.getItem('data');
    const data = dataString ? JSON.parse(dataString) : null;
    const handleSendMessage = () => {
        if (message.trim()) {
          const messagedata=
          {
            name:data.name,
            employeeId:data.employeeId,
            message:message
          }
          storeemployeemessage(messagedata).then((res)=>{
            setMessage('')       
          })
        }
    };

    return (
        <div className="employee-communication">
            <Sidebar />
            <div className="main-content">
                <Navbar />
                <div className="communication-content">
                    <h1>Communicate with HR</h1>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message here..."
                    />
                    <button onClick={handleSendMessage}>Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default EmployeeCommunication;
