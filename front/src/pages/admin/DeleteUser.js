import React, { useState, useEffect } from 'react';
import * as Api from "../../utills/api";
import { Button, Modal } from 'react-bootstrap';

export function DeleteUser({ setRender, modeOff, userId }) {

    const handleUserDelete = async () => {
        try {
            await Api.delete('users', userId);
            alert("회원정보가 삭제되었습니다.");
            setRender(true);
            modeOff();
        }
        catch (err) {
            alert("에러");
            modeOff();
        }
    };

    

    return (
        <Modal show onHide={modeOff}>
            <Modal.Header closeButton>
                <Modal.Title>계정 삭제</Modal.Title>
            </Modal.Header>
            <Modal.Body>계정 삭제시 복구할 수 없습니다. 정말로 취소하시겠습니까?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={modeOff}>
                    아니오
                </Button>
                <Button variant="primary" type="submit" onClick={handleUserDelete}>
                    예
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
