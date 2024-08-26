import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/EmployeeLogin.css';
import backgroundImage from '../assets/hr.jpg';

const EmployeeLogin = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin();
        navigate('/employee-dashboard');
    };

    return (
        <div className="login-container">
            <h2>Employee Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default EmployeeLogin;
