import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => {
    const dataString = localStorage.getItem('data');
    const data = dataString ? JSON.parse(dataString) : null;
    return (
        <div className="sidebar">
            <ul>
                <li><a href={`${data.role === 'admin' ? '/admin-dashboard':'/employee-dashboard'}`}>Dashboard</a></li>
                <li><a href={`${data.role === 'admin' ? '/admin-messages':'/employee-communication'}`}>Communicate </a></li>
                <li><a href="/settings">Settings</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;



