import axios from 'axios'
const BaseUrl= `http://localhost:5000`;

const register =`${BaseUrl}/api/employees/add-employee`
const login =`${BaseUrl}/api/auth/login`
const getAllEmployee= `${BaseUrl}/api/auth/getemployee`
const getAllEmployeeid= `${BaseUrl}/api/auth/getEmployeeById`
const storemessage= `${BaseUrl}/api/auth/storeMessage`
const getMessage= `${BaseUrl}/api/auth/getAllMessages`

export  function registerNewUser (data){
    return axios({
        method:'post',
        headers: {
            'Content-Type': 'application/json'
        },
        data:data,
        url:register
    })
}

export  function userLogin (data){
    return axios({
        method:'post',
        headers: {
            'Content-Type': 'application/json'
        },
        data:data,
        url:login
    })
}

export  function getallemployee (data){
    return axios({
        method:'get',
        headers: {
            'Content-Type': 'application/json'
        },
        data:data,
        url:getAllEmployee
    })
}

export  function getAllEmployeebyid (id){
    return axios({
        method:'post',
         url:`${getAllEmployeeid}`,
         headers: {
            'Content-Type': 'application/json'
        },
        data:id
         
    })
}

export  function storeemployeemessage (data){
    return axios({
        method:'post',
         url:`${storemessage}`,
         headers: {
            'Content-Type': 'application/json'
        },
        data:data        
    })
}

export  function getmessages (){
    return axios({
        method:'get',
         url:getMessage,
         headers: {
            'Content-Type': 'application/json'
        },        
    })
}