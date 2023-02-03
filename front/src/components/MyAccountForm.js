import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from 'react-bootstrap';
import axios from "axios";
import DaumPostcode from 'react-daum-postcode';
import UserEditForm from "./UserEditForm";

import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBRow,
    MDBInput,
    MDBSwitch,
    MDBCheckbox,
    MDBIcon
}
    from 'mdb-react-ui-kit';

function MyAccountForm() {

    const [user, setUser] = useState([]);

    const init = async () => {
        const jwt = localStorage.getItem('token')
        await axios.get('http://localhost:5001/api/user', {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        }).then(res => {
            console.log(res.data)
            setUser(res.data)
        })
            .catch(error => console.log(error))

    };
    useEffect(() => {
        init();
    }, []);

    return (
        <>
            <UserEditForm
                user={user}
                setUser={setUser}
            />

        </>
    );

}


export default MyAccountForm;