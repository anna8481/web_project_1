import * as Api from "../../utills/api";
import React, { useState, useEffect } from "react";
import { Form, Button, Container, InputGroup, FormControl, Row, Col, Table } from 'react-bootstrap';
import Header from '../../components/Header'
import { DeleteUser } from "./DeleteUser";

function UserManage() {

    const [users, setUsers] = useState(undefined)
    const [userList, setUserList] = useState(undefined);
    const [userId, setUserId] = useState(undefined);
    // Delete Modal State
    const [DM, setDM] = useState(false);
    const DMShow = () => setDM(true);
    const DMClose = () => setDM(false);

    const userMap = (user) => {
        setUserList(() => {
            const newUserList = user.map((item, index) => {
                return (
                    <tr key={item._id} >
                        <th>{item.createdAt.split("T")[0]}</th>
                        <th>{item.email}</th>
                        <th>{item.userName}</th>
                        <th>
                            <select defaultValue={item.role} name={item._id} onChange={handleRoleChange}>
                                <option value="admin">관리자</option>
                                <option value="basic-user">회원</option>
                            </select>
                        </th>
                        <th><button id={item._id} onClick={handleUserDelete}>계정 삭제</button></th>
                    </tr>)
            })

            return newUserList  ;
        })
    }
    const init = async () => {
        const res = await Api.get('admin/users')
        setUsers(() => res.data)
        userMap(res.data)
    }

    useEffect(() => {
        init();
    }, []);

    useEffect(() => {
        if(Array.isArray(users) && Array.isArray(userList))
        {
            if(typeof userMap === "function")
            userMap(users)
        else
            console.log(typeof userMap)
        }
    },[users])

    const handleUserDelete = (e) => {
        e.preventDefault();

        setUserId(() => {
            return e.target.id
        })
        DMShow();
    }

    const handleRoleChange = async (e) => {
        console.log("Patch Role", e.target.id, e.target.value)
    }
    return (<>
        <Header title="회원 관리"></Header>
        <Table striped hover>
            <thead>
                <tr>
                    <th>가입 날짜</th>
                    <th>이메일</th>
                    <th>이름</th>
                    <th>권한</th>
                    <th>관리</th>
                </tr>
            </thead>
            <tbody>
                {Array.isArray(userList) && userList}
            </tbody>
            {DM && <DeleteUser users={users} setUsers={setUsers} userMap={userMap} close={DMClose} userId={userId} />}
        </Table>

    </>)

}

export default UserManage;