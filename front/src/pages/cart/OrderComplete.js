import { ROUTE } from '../../utills/route'
import { Link } from 'react-router-dom';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';
import './OrderComplete.css'


function OrderComplete() {

    return (
        <>
            <div className="container">
                <MDBBreadcrumb>
                    <MDBBreadcrumbItem>
                        <Link to='/cart'>장바구니</Link>
                    </MDBBreadcrumbItem>
                    <MDBBreadcrumbItem>
                        <Link to="/order">주문결제</Link>
                    </MDBBreadcrumbItem>
                    <MDBBreadcrumbItem active>주문완료</MDBBreadcrumbItem>
                </MDBBreadcrumb>

                <div className="order-complete">
                    <div className="order-complete-header"><h3>Thank you for purchasing!</h3></div>
                    <Link to={ROUTE.ACCOUNT_ORDERS.link}>
                        <div className="purchase" >
                            <button className="purchase-button" >Order History</button>
                        </div>
                    </Link>

                    <Link to={ROUTE.HOME.link}> <p style={{ textAlign: 'center', marginTop: "1rem", textDecoration: "underline" }}>Back home</p> </Link>
                </div>
            </div>

        </>
    )
}

export default OrderComplete;