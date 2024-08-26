import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminLogin.css';
import { userLogin } from '../api/api';

const AdminLogin = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const loginData = {
         email:email,
         employeeId:password
        }
            userLogin(loginData).then((res)=>{
                const data=res.data;
                localStorage.setItem('data',JSON.stringify(data));
                if(data.role === 'admin'){
                    navigate('/admin-dashboard');
                }else{
                    navigate('/employee-dashboard');
                }
                
            })
      
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
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

export default AdminLogin;
