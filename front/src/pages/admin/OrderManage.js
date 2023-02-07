import * as Api from "../../utills/api";
import React, { useState, useEffect } from "react";
import { Form, Button, Container, InputGroup, FormControl, Row, Col, Table } from 'react-bootstrap';
import Header from '../../components/Header'
import {DeleteOrder} from "../user/DeleteOrder";

function OrderManage() {
    const [orderList, setOrderList] = useState(undefined);
    const [orderId, setOrderId] = useState(undefined);
    // Delete Modal State
    const [DM, setDM] = useState(false);
    const DMShow = () => setDM(true);
    const DMClose = () => setDM(false);

    const init = async () => {
        const res = await Api.get('admin/orders')
        console.log(res.data)
        setOrderList(() => {
            const userOrders = res.data.map((item,index) => {
                return (
                    <tr key={index} >
                        <th>{item.createdAt.split("T")[0]}</th>
                        <th>주문 상품</th>
                        <th>{item.status}</th>
                        <th><button id={item._id} onClick={handleOrderCancel}>취소</button></th>
                    </tr>)
            })
            
            return userOrders;
        })
    }

    useEffect(() => {
        init();
    }, []);

    const handleOrderCancel = (e) => {
        e.preventDefault();
        
        setOrderId(() => {
            return e.target.id
        })
        console.log(orderId)
        DMShow();
    }
    return (<>
        <Header title="전체 주문 관리"></Header>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>날짜</th>
                    <th>주문 상품</th>
                    <th>주문 총액</th>
                    <th>배송 상태 관리</th>
                    <th>취소</th>
                </tr>
            </thead>
            <tbody>
                {Array.isArray(orderList) && orderList}
            </tbody>
           {DM && <DeleteOrder close={DMClose} orderId={orderId}/>}
        </Table>

    </>)

}

export default OrderManage;