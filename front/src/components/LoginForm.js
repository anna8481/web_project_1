import { Form, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import './LoginForm.css'

function LoginForm() {
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

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(inputs)
        // 로그인 API 호출
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