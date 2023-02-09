import * as Api from "../../utills/api";
import React, { useState, useEffect } from "react";
import { Table } from 'react-bootstrap';
import Header from '../../components/Header'
import { DeleteOrder } from "../user/DeleteOrder";

function OrderManage() {
    const [orders, setOrders] = useState(undefined);
    const [orderId, setOrderId] = useState(undefined);
    const [render, setRender] = useState(true);
    // Modal State  
    const [mode, setMode] = useState(undefined);
    const modeOff = () => { setMode(undefined) };

    const orderMap = (orders) => {
        const userOrders = orders.map((item, index) => {
            return (
                <tr key={index} >
                    <th>{item.createdAt.split("T")[0]}</th>
                    <th>{item.orderTitle}</th>
                    <th>{item.totalPrice}</th>
                    <th>
                        <select id={item._id} value={item.status} onChange={handleStatusChange}>
                            <option value="상품 준비중">상품 준비중</option>
                            <option value="상품 배송중">상품 배송중</option>
                            <option value="배송완료">배송완료</option>
                        </select>
                    </th>
                    <th><button className="edit-button" id={item._id} onClick={handleOrderCancel}>취소</button></th>
                </tr>)
        })

        return userOrders;
    }
    const init = async () => {
        const res = await Api.get('admin/orderslist/all')
        // console.log(res.data)
        setOrders(() => res.data)
    }

    useEffect(() => {
        if(render) {
            init();
            setRender(false);
        }
    }, [mode, render]);

    const handleOrderCancel = (e) => {
        e.preventDefault();

        setOrderId(() => e.target.id)
        setMode("DELETE")
    }

    const handleStatusChange = async (e) => {
        const formdata = {
            status: e.target.value,
        }
        await Api.patch(`admin/orders/${e.target.id}`, formdata)
        setRender(true);
    }
    return (<>
        <div className="section">
            <Header title="전체 주문 관리"></Header>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>날짜</th>
                        <th>주문 정보</th>
                        <th>주문 총액</th>
                        <th>배송 상태 관리</th>
                        <th>취소</th>
                    </tr>
                </thead>
                <tbody>
                    {typeof orders ==='object' && orderMap(orders)}
                </tbody>
                {mode === "DELETE" && <DeleteOrder setRender={setRender} modeOff={modeOff} orderId={orderId} />}
            </Table>
        </div>
    </>)

}

export default OrderManage;