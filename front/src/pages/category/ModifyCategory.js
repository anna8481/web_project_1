import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Api from "../../utills/api";
import { Form, Button, Container, Row, Col, InputGroup, FormControl, Modal } from 'react-bootstrap';

export function ModifyCategory({ close, category }) {

    const handleClose = () => {
        close();
    };
    const [inputs, setInputs] = useState({
        title: category.title,
        description: category.description,
        themeClass: category.themeClass,
        imageKey: category.imageKey
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };
    
    const handleModify = async() => {
        try {
            const formdata = inputs
            const res = await Api.patch(`categorys/${category._id}`,formdata);
            alert("해당 카테고리가 수정되었습니다.");
            close();
            window.location.replace("/category/manage");
        }
        catch (err) {
            alert(err)
            close();
        }
    }

    return (
        <Modal show onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>카테고리 수정</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Container className="register-category-form-container">
            <Form className="register-category-form-box" id="registerCategoryForm" >
                <Form.Group controlId="titleInput">
                    <Form.Label>카테고리 이름</Form.Label>
                    <Form.Control type="text" value={inputs.title}placeholder="Men Clothes" autoComplete="on" name="title" onChange={handleChange}/>
                </Form.Group>

                <Form.Group controlId="descriptionInput">
                    <Form.Label>카테고리 설명</Form.Label>
                    <Form.Control type="text" value={inputs.description} name='description' placeholder="센세이셔널한 봄, 여름 코디" autoComplete="on" onChange={handleChange}/>
                </Form.Group>

                <Form.Group controlId="themeClassInput">
                    <Form.Label>카테고리 테마</Form.Label>
                    <Form.Control as="select" className={"notification "+inputs.themeClass} name="themeClass" onChange={handleChange}>
                        <option value="">테마를 선택해 주세요.</option>

                        <option
                            value="is-primary is-light"
                            style={{ backgroundColor: '#ebfffc', color: '#00947e' }}
                        >
                            light skygreen
                        </option>

                        <option
                            value="is-link is-light"
                            style={{ backgroundColor: '#eff1fa', color: '#3850b7' }}
                        >
                            light purple
                        </option>

                        <option
                            value="is-info is-light"
                            style={{ backgroundColor: '#eff5fb', color: '#296fa8' }}
                        >
                            light blue
                        </option>

                        <option
                            value="is-success is-light"
                            style={{ backgroundColor: '#effaf5', color: '#257953' }}
                        >
                            light green
                        </option>

                        <option
                            value="is-warning is-light"
                            style={{ backgroundColor: '#fffaeb', color: '#946c00' }}
                        >
                            light yellow
                        </option>

                        <option
                            value="is-danger is-light"
                            style={{ backgroundColor: '#feecf0', color: '#cc0f35' }}
                        >
                            light pink
                        </option>

                        <option
                            value="is-primary"
                            style={{ backgroundColor: '#00d1b2', color: '#fff' }}
                        >
                            skygreen
                        </option>

                        <option
                            value="is-link"
                            style={{ backgroundColor: '#485fc7', color: '#fff' }}
                        >
                            blue
                        </option>

                        <option
                            value="is-info"
                            style={{ backgroundColor: '#3e8ed0', color: '#fff' }}
                        >
                            skyblue
                        </option>

                        <option
                            value="is-success"
                            style={{ backgroundColor: '#48c78e', color: '#fff' }}
                        >
                            green
                        </option>

                        <option
                            value="is-warning"
                            style={{
                                backgroundColor: '#ffe08a',
                                color: 'rgba(0, 0, 0, 0.7)',
                            }}
                        >
                            yellow
                        </option>

                        <option
                            value="is-danger"
                            style={{ backgroundColor: '#f14668', color: '#fff' }}
                        >
                            red
                        </option>
                    </Form.Control>
                </Form.Group>
                
            </Form>
        </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    취소
                </Button>
                <Button variant="primary" type="submit" onClick={handleModify} >
                    수정
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
