import React, { useState } from 'react';
import * as Api from "../../utills/api";
import { Button, Modal } from 'react-bootstrap';

export function DeleteOrder({ setRender, modeOff, orderId }) {

    const handleOrderDelete = async () => {
        try {
            const res = await Api.delete('orders', orderId);
            alert("주문이 취소되었습니다.");
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
                <Modal.Title>주문 취소</Modal.Title>
            </Modal.Header>
            <Modal.Body>주문 취소 시 복구할 수 없습니다. 정말로 취소하시겠습니까?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={modeOff}>
                    아니오
                </Button>
                <Button variant="primary" type="submit" onClick={handleOrderDelete}>
                    예
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
