import React, { useState, useEffect } from 'react';
import * as Api from "../../utills/api";
import axios from 'axios'
import { Form, Button, Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import './CategoryManage.css'
import { DeleteCategory } from './DeleteCategory';
import { ModifyCategory } from './ModifyCategory';
import Header from '../../components/Header'

function CategoryManage() {
    const [categories, setCategories] = useState("")
    const [isLoad, setIsLoad] = useState(false);
    const [theme, setTheme] = useState("");
    const [category, setCategory] = useState(undefined);

    // Delete Modal State
    const [DM, setDM] = useState(false);
    const DMShow = () => setDM(true);
    const DMClose = () => setDM(false);

    // Modification Modal State
    const [MM, setMM] = useState(false);
    const MMShow = () => setMM(true);
    const MMClose = () => setMM(false);

    // Pageload시 category를 불러옴
    const init = async () => {
        await Api.get('categorylist').then(
            res => {
                setCategories((current) => {
                    const newCategories = res.data.map((item, index) => {
                        return (
                            <div className="message media category-item" key={index}>
                                <div className="media-left">
                                    <figure className="image">
                                        <img src={"https://res.cloudinary.com/moteam/image/upload/" + item.imageKey + ".png"} alt="" />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <div>
                                        <p className="title">{item.title}</p>
                                        <p className="description">{item.description}</p>
                                        <button className="edit-button" id={item._id} onClick={e => {
                                            setCategory(() => {
                                                const newCategory = res.data.find(item => item._id === e.target.id)
                                                return newCategory
                                            })
                                            MMShow();
                                        }}>수정</button>
                                        {'    '}
                                        <button className="edit-button" style={{ marginRight: "2rem" }} onClick={e => {
                                            setCategory(() => {
                                                const newCategory = res.data.find(item => item._id === e.target.id)
                                                return newCategory
                                            })
                                            DMShow();
                                        }}>삭제</button>
                                    </div>
                                </div>
                            </div>

                        )
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



    return (<>
        <div className="section">
            <Header title="카테고리 관리"></Header>
            <div>
                {isLoad && categories}
                {DM && <DeleteCategory close={DMClose} categoryId={category._id} />}
                {MM && <ModifyCategory close={MMClose} category={category} />}
            </div>
        </div>
    </>);
}

export default CategoryManage;
