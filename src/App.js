import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import EmployeeLogin from './components/EmployeeLogin';
import AdminDashboard from './components/AdminDashboard';
import EmployeeDashboard from './components/EmployeeDashboard';
import EmployeeCommunication from './components/EmployeeCommunication';
import AdminMessages from './components/AdminMessages'; // Import the new component
import './App.css';

function App() {
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(true);
    const [isEmployeeLoggedIn, setIsEmployeeLoggedIn] = useState(true);
    const [employeeId, setEmployeeId] = useState(null);
    return (
        <Router>
            <Routes>
                <Route
                    path="/login"
                    element={<AdminLogin onLogin={() => setIsAdminLoggedIn(true)} />}
                />

                <Route
                    path="/admin-dashboard"
                    element={ <AdminDashboard /> }
                />

                <Route
                    path="/employee-dashboard"
                    element={isEmployeeLoggedIn ? <EmployeeDashboard employeeId={employeeId} /> : <Navigate to="/employee-login" />}
                />

                <Route
                    path="/employee-communication"
                    element={<EmployeeCommunication employeeId={employeeId} />}
                />

                <Route
                    path="/admin-messages"
                    element={isAdminLoggedIn ? <AdminMessages /> : <Navigate to="/admin-login" />}
                />

                <Route path="/" element={<Navigate to="/employee-login" />} />
            </Routes>
        </Router>
    );
}

export default App;
