import * as Api from "../../utills/api";
import React, { useState, useEffect } from "react";
import { Form, Button, Container, InputGroup, FormControl, Row, Col, Table } from 'react-bootstrap';
import Header from '../../components/Header'
import { DeleteOrder } from "./DeleteOrder";

function OrderHistory() {
    const [orders, setOrders] = useState(undefined);
    const [orderId, setOrderId] = useState(undefined);
    const [render, setRender] = useState(true);
    // Modal State

    const [mode, setMode] = useState(undefined);
    const modeOff = () => { setMode(undefined) };

    const init = async () => {
        const res = await Api.get('orderlist/user')
        setOrders(() => res.data)
    }

    const orderMap = (orders) => {
        const userOrders = orders.map((item, index) => {
            return (
                <tr key={index} >
                    <th>{item.createdAt.split("T")[0]}</th>
                    <th>{`${item.orderTitle}`}</th>
                    <th>{item.status}</th>
                    <th><button className="edit-button" id={item._id} onClick={handleOrderCancel}>수정</button></th>
                    <th><button className="edit-button" id={item._id} onClick={handleOrderCancel}>취소</button></th>
                </tr>)
        })

        return userOrders;
    }

    useEffect(() => {
        if (render) {
            init();
            setRender(false);
        }
    }, [mode, render]);

    const handleOrderCancel = (e) => {
        e.preventDefault();

        setOrderId(() => e.target.id)
        setMode("DELETE")
    }

    return (<>
        <div className="section">
            <Header title="주문 조회"></Header>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>날짜</th>
                        <th>주문 상품</th>
                        <th>배송</th>
                        <th>주문 정보 수정</th>
                        <th>주문 취소</th>
                    </tr>
                </thead>
                <tbody>
                    {typeof orders === 'object' && orderMap(orders)}
                </tbody>
                {mode === "DELETE" && <DeleteOrder setRender={setRender} modeOff={modeOff} orderId={orderId} />}
            </Table>
        </div>
    </>)

}

export default OrderHistory