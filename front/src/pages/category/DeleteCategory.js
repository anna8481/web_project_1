import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Api from "../../utills/api";
import { Button, Modal } from 'react-bootstrap';

export function DeleteCategory({ close, categoryId }) {

    const handleClose = () => {
        close();
    };
    const handleCategoryDelete = async () => {
        try {
            const res = await Api.delete('categorys', categoryId);
            alert("해당 카테고리가 삭제되었습니다.");
            close();
            window.location.replace("/category/manage");
        }
        catch (err) {
            alert("해당 카테고리에 등록된 제품이 있습니다. 등록된 제품이 없어야 카테고리 삭제가 가능합니다.");
            close();
        }
    };

    return (
        <Modal show onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>카테고리 삭제</Modal.Title>
            </Modal.Header>
            <Modal.Body>카테고리 삭제 시 복구할 수 없습니다. 정말로 삭제하시겠습니까?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    아니오
                </Button>
                <Button variant="primary" type="submit" onClick={handleCategoryDelete}>
                    예
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
