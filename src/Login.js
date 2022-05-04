import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router';


function Login({setuserid}) {

async function active(){
    var email = window.localStorage.getItem("email");
console.log(email);
    let data = await axios.put("http://localhost:3001/loginactive",{email:email},{
        headers: {
            Authorization: window.localStorage.getItem("token")
        }
    })
}

    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            try {
                console.log(values);
               let data = await axios.post("http://localhost:3001/login", values)
                window.localStorage.setItem("token", data.data.token);

               window.localStorage.setItem("email", data.data.user.email);
               window.localStorage.setItem("name", data.data.user.firstname);
               console.log(data.data.message);
               console.log(data.data);

                if(data.data.message=="login"){
                    navigate("/dashboard");
                    active();
               }else if(data.data.message=="email id or password incorrect"){
                   alert("incorrect password or userid");
               }
             } catch (error) {
                console.log(error)
            }
        }
    })
    return (
        <div>
                        <h1>Login Form</h1>

            <form onSubmit={formik.handleSubmit}>
                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col-lg-4 text-right'><label>Email:</label></div>
                        <div className='col-lg-6'><input type="email" className='form-control'
                            onChange={formik.handleChange} value={formik.values.email} name='email'></input></div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-lg-4 text-right'><label>Password:</label></div>
                        <div className='col-lg-6'><input type="password" className='form-control'
                            onChange={formik.handleChange} value={formik.values.password} name='password'></input></div>
                    </div>
                    <div className='col-lg-12 mt-5'><input type="submit" className='btn'
                     id="paybtn" value="Login"></input></div>
                    </div>
            </form>
        </div>
    )
}

export default Login
