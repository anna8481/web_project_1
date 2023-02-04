import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import * as Api from "../api";
import './RegisterForm.css'
import { Form, Button, Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';


function ProductAdd() {
    const [categories, setCategories] = useState("") 
    const [isLoad, setIsLoad] = useState(false);
    const [theme, setTheme] = useState("");

    // Pageload시 category를 불러옴
    const init = async () => {
        await Api.get('categorylist').then(
            res => {
                setCategories((current) => {
                    const newCategories = res.data.map((item,index) => {
                        return <option key={index} value={item.title} className={"notification " + item.themeClass}>{item.title}</option>
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


    const [fileName, setFileName] = useState("");

    const handleFileName = (e) => {
        setFileName(e.target.value);
        console.log(e.target.files)
    }

    const [inputs, setInputs] = useState({
        productName: "",
        categoryId: "",
        productInfo: "",
        imageKey: "0204 테스트",
        price: ""
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };
    const validationForm = ({ productName, categoryId, productInfo, imageKey, price }) => {
        if (productName !== "" && categoryId !== "" && productInfo !== "" && imageKey !== "" && price !== "")
            return true;
        return false;
    }

    async function addProduct(formdata) {

        const newData = await Api.post("product/add", formdata)
            .then(res => {
                alert("제품 등록이 완료되었습니다.");
                console.log(res)
            })
            .catch(err => {
                alert("이미 있는 제품 이름입니다.")
            })

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const validated = validationForm(inputs)
        if (!validated) {
            alert('제품을 추가하려면 빈 칸이 없어야합니다.')
            return;
        }

        const formdata = inputs
        alert("제품 등록이 완료되었습니다.");
        // addProduct(formdata)
        // e.target.reset();
    }

    return (
        <Container className="register-category-form-container">
            <Form className="register-category-form-box" id="registerCategoryForm" onSubmit={handleSubmit}>
                <h5 className="text-primary">제품 판매</h5>
                <Form.Group controlId="productNameInput">
                    <Form.Label>제품 이름</Form.Label>
                    <Form.Control type="text" placeholder="제품 이름을 입력하세요" autoComplete="on" name="productName" onChange=
                        {handleChange} />
                </Form.Group>

                <Form.Group controlId="categoryIdInput">
                    <Form.Label>카테고리</Form.Label>
                    <Form.Control as="select" name="categoryId" className={theme}
                        onChange={e => {
                            handleChange(e)
                            setTheme(() => {
                                return categories.find(item => item.props.value === e.target.value).props.className
                            })
                        }

                        }>
                        <option value="">카테고리를 선택하세요</option>
                        {isLoad && categories}
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="productInfonInput">
                    <Form.Label>제품 설명</Form.Label>
                    <Form.Control rows={5} as="textarea" name='productInfo' autoComplete="on" onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="imageInput">
                    <Form.Label>이미지 사진</Form.Label>
                    <InputGroup className="mb-3">
                        <FormControl

                            type="file"
                            name="image-file"
                            accept=".png, .jpeg, .jpg"
                            onChange={handleFileName}
                        />

                    </InputGroup>
                </Form.Group>

                <Form.Group controlId="price">
                    <Form.Label>가격</Form.Label>
                    <Form.Control type="number" placeholder="0" autoComplete="on" name="price" onChange={handleChange} />
                </Form.Group>

                <Button type="submit" className="button is-primary is-fullwidth" id="addCategoryButton">제품 추가하기</Button>
            </Form>
        </Container>
    );
}

export default ProductAdd;