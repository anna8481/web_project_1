import React, { useState, useEffect } from 'react';
import * as Api from "../../utills/api";
import { Button, Modal } from 'react-bootstrap';

export function DeleteUser({users, setUsers, close, userId }) {

    const handleClose = () => {
        close();
    };
    const handleUserDelete = async () => {
        try {
            const res = await Api.delete('users', userId);
            alert("회원정보가 삭제되었습니다.");
            
            // window.location.replace("/admin/users");    
            setUsers(() => {
                const newUser = users.filter(item => item._id !== userId)
                return newUser;
            })
            
            close();
        }
        catch (err) {
            alert("에러");
            close();
        }
    };

    

    return (
        <Modal show onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>계정 삭제</Modal.Title>
            </Modal.Header>
            <Modal.Body>계정 삭제시 복구할 수 없습니다. 정말로 취소하시겠습니까?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    아니오
                </Button>
                <Button variant="primary" type="submit" onClick={handleUserDelete}>
                    예
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
