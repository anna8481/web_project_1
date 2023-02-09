import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Api from "../../utills/api";
import { Button, Modal } from 'react-bootstrap';

export function DeleteCategory({ setRender, modeOff, categoryId }) {

    const handleCategoryDelete = async () => {
        try {
            const res = await Api.delete('categorys', categoryId);
            alert("해당 카테고리가 삭제되었습니다.");
            setRender(true);
            modeOff();
        }
        catch (err) {
            alert(err.response.data.reason)
            modeOff();
        }
    };

    return (
        <Modal show onHide={modeOff}>
            <Modal.Header closeButton>
                <Modal.Title>카테고리 삭제</Modal.Title>
            </Modal.Header>
            <Modal.Body>카테고리 삭제 시 복구할 수 없습니다. 정말로 삭제하시겠습니까?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={modeOff}>
                    아니오
                </Button>
                <Button variant="primary" type="submit" onClick={handleCategoryDelete}>
                    예
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
