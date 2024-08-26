import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import '../styles/AdminDashboard.css';
import * as XLSX  from 'xlsx';
import {getallemployee, getAllEmployeebyid, registerNewUser} from '../api/api.js'
const AdminDashboard = () => {
    const [employeeDetails, setEmployeeDetails] = useState([]);
    const [data,setData] = useState([]);
    const [employeeid,seTemployeeID] =useState('');

    const habdlefilechange = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        
        reader.onload = (e) => {
            const binaryStr = e.target.result;
            const workbook = XLSX.read(binaryStr, { type: 'binary' });

            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            
            const jsonData = XLSX.utils.sheet_to_json(worksheet);
            setData(jsonData);
            console.log(jsonData);
            
            registerNewUser(jsonData).then((res)=>{            
                
            }).catch((e)=>{
                console.log(e);
                
            });
            
        };

        reader.readAsBinaryString(file);
    };
    const handleTextchange =(e)=>{
        seTemployeeID(e.target.value);
    }
    const findEmployee =(e)=>{
    if(employeeid !== ''){
        const data ={
            id:employeeid
        }
        
        getAllEmployeebyid(data).then((res)=>{
            setEmployeeDetails(res.data)
        })
    }
    
    }

    
    return (
        <div className="admin-dashboard">
            <div>
            <Sidebar />
            </div>
            <div className="main-content">
                <Navbar />
                <div className="dashboard-content">
                    <h1>Admin Dashboard</h1>
                    <input type='file'
                    accept='.xlsx'
                    onChange={(e)=>{habdlefilechange(e)}}>
                    </input>
                    <input
                     onChange={(e)=>{handleTextchange(e)}}>
                    </input>
                    <input
                type='button'
                value='Get Details'
                onClick={(e) => findEmployee(e)}
            />
                    <div className="dashboard-content">
                    {employeeDetails ? (
                        <div className="employee-details-section">
                            <h2>Details</h2>
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
        </div>
    );
};

export default AdminDashboard;
