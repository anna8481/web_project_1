import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import './Login.css'
import * as Api from "../../utills/api";

function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });

    const handleChange = event => {
        const { name, value } = event.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = inputs;

        try {
            const response = await Api.post("login", {
                email,
                password,
            });
            console.log("fromRegister?", location.pathname)

            localStorage.setItem('token', response.data.token);
            if (response.data.isAdmin) {
                localStorage.setItem('isAdmin', "admin");
            }

            navigate('/');
            // navigate(-1 || '/');


            console.log(response)
        } catch (err) {
            alert("이메일 또는 비밀번호가 일치하지 않습니다.")
        }
    };

    return (<>

        <div className='section'>
            <div className="container-center" >
                <p >로그인</p>
                <form onSubmit={handleLogin} className="user-form">
                    <input className="input" value={inputs.email} label='Email' name='email' type='email' placeholder='email' onChange={handleChange} />
                    <input className="input" value={inputs.password} label='Password' name='password' type='password' placeholder='password' onChange={handleChange} />
                    <button className="user-button">로그인</button>
                </form>

            </div>
        </div>
    </>
    );
}

export default Login;