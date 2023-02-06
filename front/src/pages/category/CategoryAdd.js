import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import * as Api from "../../utills/api";
import axios from 'axios'

import { Form, Button, Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';


function CategoryAdd() {
    const [fileData, setFileData] = useState("");

    const handlefileData = (e) => {
        setFileData(e.target.files[0])
    }
    
    const [inputs, setInputs] = useState({
        title: '',
        description: '',
        themeClass: '',
        imageKey: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const validationForm = ({title, description, themeClass}) => {
        if(title !== '' && description !== '' && themeClass !=='' && fileData !=='')
            return true;
        return false;
    }

    async function addCategory(formdata) {

        try {
            const newData = await Api.post("category", formdata)
            alert("category 등록이 완료되었습니다.");
            console.log(newData.data)
            
        } catch(err) {
            alert("이미 있는 category 이름입니다.")
        }

    }

    // 클라우디너리에 image를 저장하고 imageKey를 formdata에 저장
    async function addPicture(imgdata) {
        try {
            const res = await axios.post('https://api.cloudinary.com/v1_1/moteam/image/upload', imgdata)
            console.log(res.data.public_id)
            return res.data.public_id;

        } catch(err) {
            console.log("이미지 업로드 에러 발생",err)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(inputs)
        
        const validated = validationForm(inputs)
        if(!validated) {
            alert('카테고리를 추가하려면 빈 칸이 없어야합니다.')
            return;
        }
        
        const imgdata = new FormData();
        imgdata.append("file", fileData);
        imgdata.append("upload_preset", "cn0wxtm");
        const public_id = await addPicture(imgdata)

        let formdata = inputs
        formdata = {...inputs, "imageKey":public_id}
        await addCategory(formdata)

        e.target.reset();
    }

    return (
        <Container className="register-category-form-container">
            <Form className="register-category-form-box" id="registerCategoryForm" onSubmit={handleSubmit}>
                <h5 className="text-primary">카테고리 추가하기</h5>
                <Form.Group controlId="titleInput">
                    <Form.Label>카테고리 이름</Form.Label>
                    <Form.Control type="text" placeholder="Men Clothes" autoComplete="on" name="title" onChange={handleChange}/>
                </Form.Group>

                <Form.Group controlId="descriptionInput">
                    <Form.Label>카테고리 설명</Form.Label>
                    <Form.Control type="text" name='description' placeholder="센세이셔널한 봄, 여름 코디" autoComplete="on" onChange={handleChange}/>
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
                
                <Form.Group controlId="imageInput">
                    <Form.Label>카테고리 사진</Form.Label>
                    <InputGroup className="mb-3">
                        <FormControl

                            type="file"
                            name="image-file"
                            accept=".png, .jpeg, .jpg"
                            onChange={handlefileData}
                        />
                        
                    </InputGroup>
                </Form.Group>

                <Button type="submit" className="button is-primary is-fullwidth" id="addCategoryButton">카테고리 추가하기</Button>
            </Form>
        </Container>
    );
}

export default CategoryAdd;