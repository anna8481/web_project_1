import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import * as Api from "../../utills/api";
import './ProductAdd.css'
import { Form, Button, Container, InputGroup, FormControl } from 'react-bootstrap';
import Header from '../../components/Header'

function ProductAdd() {
    const [categories, setCategories] = useState("")
    const [isLoad, setIsLoad] = useState(false);
    const [theme, setTheme] = useState("");

    // Pageload시 category를 불러옴
    const init = async () => {
        await Api.get('categorylist').then(
            res => {
                setCategories((current) => {
                    const newCategories = res.data.map((item, index) => {
                        return <option key={index} value={item._id} className={"notification " + item.themeClass}>{item.title}</option>
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


    const [fileData, setFileData] = useState("");

    const handlefileData = (e) => {
        setFileData(e.target.files[0])
    }

    const initialInputs = {
        productName: "",
        categoryId: "",
        productInfo: "",
        imageKey: "",
        price: ""
    }

    const [inputs, setInputs] = useState(initialInputs);

    const handleChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const validationForm = ({ productName, categoryId, productInfo, price }) => {
        if (productName !== "" && categoryId !== "" && productInfo !== "" && fileData !== "" && price !== "")
            return true;
        return false;
    }

    async function addProduct(formdata) {

        const newData = await Api.post("product", formdata)
            .then(res => {
                alert("제품 등록이 완료되었습니다.");
                console.log(res)
            })
            .catch(err => {
                alert("이미 있는 제품 이름입니다.", err)
            })

    }

    // 클라우디너리에 image를 저장하고 imageKey를 formdata에 저장
    async function addPicture(imgdata) {
        try {
            const res = await axios.post(process.env.REACT_APP_FILE_UPLOAD_URL, imgdata)
            console.log(res.data.public_id)
            return res.data.public_id;

        } catch (err) {
            console.log("이미지 업로드 에러 발생", err)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validated = validationForm(inputs)
        if (!validated) {
            alert('제품을 추가하려면 빈 칸이 없어야합니다.')
            return;
        }

        const imgdata = new FormData();
        imgdata.append("file", fileData);
        imgdata.append("upload_preset", process.env.REACT_APP_FILE_UPLOAD_PRESET);

        const public_id = await addPicture(imgdata);
        console.log(public_id);

        let formdata = inputs;
        formdata = { ...inputs, "imageKey": public_id };
        console.log(formdata)

        await addProduct(formdata)

        e.target.reset();

        setInputs(() => {
            return initialInputs
        })
    }

    return (
        <div className="section">
            <Header title="제품 등록"></Header>
            <div className="container">
                <Form className="register-category-form-box" id="registerCategoryForm" onSubmit={handleSubmit}>

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
                                onChange={handlefileData}
                            />

                        </InputGroup>
                    </Form.Group>

                    <Form.Group controlId="price">
                        <Form.Label>가격</Form.Label>
                        <Form.Control type="number" placeholder="0" autoComplete="on" name="price" onChange={handleChange} />
                    </Form.Group>

                    <Button type="submit" className="button is-primary is-fullwidth" id="addCategoryButton">제품 추가하기</Button>
                </Form>
            </div>
        </div>
    );
}

export default ProductAdd;