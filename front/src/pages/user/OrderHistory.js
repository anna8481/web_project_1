import * as Api from "../../utills/api";
import React, { useState, useEffect } from "react";
import { Form, Button, Container, InputGroup, FormControl, Row, Col, Table } from 'react-bootstrap';
import Header from '../../components/Header'
import { DeleteOrder } from "./DeleteOrder";

function OrderHistory() {
    const [orders, setOrders] = useState(undefined);
    const [orderList, setOrderList] = useState(undefined);
    const [orderId, setOrderId] = useState(undefined);

    // Delete Modal State

    const [DM, setDM] = useState(false);
    const DMShow = () => setDM(true);
    const DMClose = () => setDM(false);

    const init = async () => {
        const res = await Api.get('orderlist/user')
        setOrders(() => res.data)
        orderMap(res.data)
    }

    const orderMap = (orders) => {
        setOrderList(() => {
            const userOrders = orders.map((item,index) => {
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

    useEffect(() => {
        if(Array.isArray(orders) && Array.isArray(orderList))
            orderMap(orders)
       
    },[orders])

    const handleOrderCancel = (e) => {
        e.preventDefault();
        
        setOrderId(() => {
            return e.target.id
        })
        console.log(orderId)
        DMShow();
    }
    return (<>
        <Header title="주문 조회"></Header>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>날짜</th>
                    <th>주문 상품</th>
                    <th>배송</th>
                    <th>주문 취소</th>
                </tr>
            </thead>
            <tbody>
                {Array.isArray(orderList) && orderList}
            </tbody>
           {DM && <DeleteOrder orders={orders} setOrders={setOrders} close={DMClose} orderId={orderId}/>}
        </Table>

    </>)

}

export default OrderHistory