import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import UserEditForm from "./UserEditForm";


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