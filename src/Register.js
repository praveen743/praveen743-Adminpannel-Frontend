import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

function Register() {
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            firstname: '',
            email: '',
            phonenumber: '',
            password: '',
            age:'',
            dob:'',
            plan: "Silver"
        },
        onSubmit: async (values) => {
            try {
                console.log(values);
                let data = await axios.post("http://localhost:3001/register", values)
                if (data.data.message === "Email already exist!") {
                    alert("Email already exist!")
                } else {
                    navigate('/login')
                }

            } catch (error) {
                console.log(error)
            }
        }
    })
    return (
        <div>
            <h1>Registeration Form</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className='container' id='regcon'>
                    <div className='row mt-4'>
                        <div className='col-lg-4 text-right'><label>Name:</label></div>
                        <div className='col-lg-6'><input type="text" className='form-control'
                            onChange={formik.handleChange} value={formik.values.firstname} name='firstname'></input></div>
                    </div>

                    <div className='row mt-4'>
                        <div className='col-lg-4 text-right'><label>Email:</label></div>
                        <div className='col-lg-6'><input type="email" className='form-control'
                            onChange={formik.handleChange} value={formik.values.email} name='email'></input></div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-lg-4 text-right'><label>Phonenumber:</label></div>
                        <div className='col-lg-6'><input type="tel" className='form-control'
                            pattern="[0-9]{10}"
                            onChange={formik.handleChange} value={formik.values.phonenumber} name='phonenumber'></input></div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-lg-4 text-right'><label>Age:</label></div>
                        <div className='col-lg-6'><input type="number" className='form-control'
                            pattern="[0-9]{3}"
                            onChange={formik.handleChange} value={formik.values.age} name='age'></input></div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-lg-4 text-right'><label>Date Of Birth:</label></div>
                        <div className='col-lg-6'><input type="date" className='form-control'
                             onChange={formik.handleChange} value={formik.values.dob} name='dob'></input></div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-lg-4 text-right'><label>Password:</label></div>
                        <div className='col-lg-6'><input type="password" className='form-control'
                            onChange={formik.handleChange} value={formik.values.password} name='password'></input></div>
                    </div>
                    <div className='row mt-3'>
                         <div className='col-lg-6 mt-2 text-right'><input type="submit" 
                         className='btn  btn-lg' id='paybtn'value="Register"></input></div>
                    <Link to="/login"  className='col-lg-6 mt-2 text-left'><input type="submit" 
                    className='btn  btn-lg' id='paybtn' value="Login"></input></Link>
                    </div>
                    
                </div>
            </form>

        </div>
    )
}

export default Register
