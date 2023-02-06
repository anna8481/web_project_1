import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import * as Api from "../../utills/api";
import axios from 'axios'
import { Form, Button, Container, Row, Col, InputGroup, FormControl, Modal } from 'react-bootstrap';
import './CategoryManage.css'

const ModalDelete = () => {
    //Modal 사용을 위한 State
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>계정 삭제</Modal.Title>
            </Modal.Header>
            <Modal.Body>회원정보 삭제 시 복구할 수 없습니다. 정말로 삭제하시겠습니까?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    아니오
                </Button>
                <Button variant="primary" type="submit" onClick={handleClose}>
                    예
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
function CategoryManage() {
    const [categories, setCategories] = useState("")
    const [isLoad, setIsLoad] = useState(false);
    const [theme, setTheme] = useState("");

    // Pageload시 category를 불러옴
    const init = async () => {
        await Api.get('categorylist').then(
            res => {
                
                setCategories((current) => {
                    const newCategories = res.data.map((item, index) => {
                        return <div>
                            <div className="message media category-item" id={item._id}>
                                <div className="media-left">
                                    <figure className="image">
                                        <img src="https://res.cloudinary.com/moteam/image/upload/v1675663591/fgt7gorax8hrc0izzqar.jpg" alt="" />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <div>
                                        <p className="title">{item.title}</p>
                                        <p className="description">{item.description}</p>
                                        <Button size='sm' className="">수정</Button>
                                        {'    '}
                                        <Button size='sm' className="" onClick={e => {
                                            console.log(e.target.parentNode.parentNode.parentNode.id)
                                        }}>삭제</Button>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    })
                    return newCategories
                })
            })
    }

    useEffect(() => {
        init();
    }, [])

    // useState의 동기처리를 위해 사용
    useEffect(() => {
        if (categories.length > 1) {
            setIsLoad(true);
        }
    }, [categories])
    
    const [DM, setDM] = useState(false);

    return (<>
        <h2>카테고리 관리</h2>
        <div>
            {isLoad && categories}
            <ModalDelete/>
        </div>
    </>);
}

export default CategoryManage;
