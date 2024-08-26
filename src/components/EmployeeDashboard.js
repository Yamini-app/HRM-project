import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import '../styles/EmployeeDashboard.css';

const EmployeeDashboard = ({ employeeId }) => {
    const [employeeDetails, setEmployeeDetails] = useState(null);

    useEffect(() => {
        const fetchEmployeeDetails = async () => {
            try {
                const dataString = localStorage.getItem('data');
                const data = dataString ? JSON.parse(dataString) : null;
                
                setEmployeeDetails(data);
            } catch (error) {
                console.error('Error fetching employee details:', error);
            }
        };

        fetchEmployeeDetails();
    }, [employeeId]);

    return (
        <div className="employee-dashboard">
            <Sidebar />
            <div className="main-content">
                <Navbar />
                <div className="dashboard-content">
                    <h1>Employee Dashboard</h1>
                    {employeeDetails ? (
                        <div className="employee-details-section">
                            <h2>Your Details</h2>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><strong>Employee ID:</strong></td>
                                        <td>{employeeDetails.employeeId}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Name:</strong></td>
                                        <td>{employeeDetails.name}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Email:</strong></td>
                                        <td>{employeeDetails.mailId}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Address line 1:</strong></td>
                                        <td>{employeeDetails.addressLine1}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Address line 2:</strong></td>
                                        <td>{employeeDetails.addressLine2}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>City:</strong></td>
                                        <td>{employeeDetails.city}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>State:</strong></td>
                                        <td>{employeeDetails.state}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Pincode:</strong></td>
                                        <td>{employeeDetails.pincode}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Phone number:</strong></td>
                                        <td>{employeeDetails.phone}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Marital Status :</strong></td>
                                        <td>{employeeDetails.maritalStatus}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Father's Name :</strong></td>
                                        <td>{employeeDetails.fathersName}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Mother's Name :</strong></td>
                                        <td>{employeeDetails.mothersName}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Emergency number:</strong></td>
                                        <td>{employeeDetails.emergency}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Nationality:</strong></td>
                                        <td>{employeeDetails.nationality}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>DOB:</strong></td>
                                        <td>{employeeDetails.dob}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Blood group:</strong></td>
                                        <td>{employeeDetails.bloodGroup}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Attendance:</strong></td>
                                        <td>{employeeDetails.attendance}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Position:</strong></td>
                                        <td>{employeeDetails.position}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Current salary:</strong></td>
                                        <td>{employeeDetails.currentSalary}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p>Loading your details...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EmployeeDashboard;
