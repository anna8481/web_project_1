
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import './LoginForm.css'
import * as Api from "../api";

function LoginForm() {
    const navigate = useNavigate();
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

            localStorage.setItem('token', response.data.token);
            navigate('/');
            console.log(response)
        } catch (err) {
            alert("이메일 또는 비밀번호가 일치하지 않습니다.")
        }
    };

    return (<>


        <form onSubmit={handleLogin}>
            <MDBContainer className="login-form p-3 my-7 d-flex flex-column w-50" >
                <p>로그인</p>
                <MDBInput wrapperClass='mb-4 w-50 ' value={inputs.email} label='Email' name='email' type='email' onChange={handleChange} />
                <MDBInput wrapperClass='mb-4 w-50' value={inputs.password} label='Password' name='password' type='password' onChange={handleChange} />
                <MDBBtn className="mb-4 w-50">로그인</MDBBtn>
            </MDBContainer>
        </form>

    </>
    );
}

export default LoginForm;