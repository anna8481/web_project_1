import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import MyAccountForm from './components/MyAccountForm'
import AccountSignout from './components/AccountSignout';
import AccountSection from './components/AccountSection'
import Slider from './components/Slider'
import CategoryAdd from './components/CategoryAdd';
import ProductAdd from './components/ProductAdd';
import ProductList from './components/ProductList';
import Cart from './components/Cart'
import Order from './components/Order'
import OrderComplete from './components/OrderComplete'
import Admin from './components/Admin'

export const ROUTE = {
    HOME: {
        path: "/",
        link: "/",
        element: Slider,
    },
    LOGIN: {
        path: "/login",
        link: "/login",
        element: LoginForm,
    },
    REGISTER: {
        path: "/register",
        link: "/register",
        element: RegisterForm,
    },
    ACCOUNT: {
        path: "/account",
        link: "/account",
        element: AccountSection,
    },
    ACCOUNT_SIGNOUT: {
        path: "/account/signout",
        link: "/account/signout",
        element: AccountSignout,
    },
    ACCOUNT_ORDERS: {
        path: "/account/orders",
        link: "/account/orders",
        element: AccountSection,
    },
    MYACCOUNT: {
        path: "/account/security",
        link: "/account/security",
        element: MyAccountForm,
    },
    ADMIN: {
        path: "/admin",
        link: "/admin",
        element: Admin,
    },
    ADMIN_ORDERS: {
        path: "/admin/orders",
        link: "/admin/orders",
        element: Admin,
    },
    ADMIN_USERS: {
        path: "/admin/users",
        link: "/admin/users",
        element: Admin,
    },
    CART: {
        path: "/cart",
        link: "/cart",
        element: Cart,
    },
    ORDER: {
        path: "/order",
        link: "/order",
        element: Order,
    },
    ORDER_COMPLETE: {
        path: "/order/complete",
        link: "/order/complete",
        element: OrderComplete,
    },
    CATEGORY_ADD: {
        path: "/category/add",
        link: "/category/add",
        element: CategoryAdd,
    },
    PRODUCT_ADD: {
        path: "/product/add",
        link: "/product/add",
        element: ProductAdd,
    },
    PRODUCT_LIST: {
        path: "/product/list",
        link: "/product/list",
        element: ProductList,
    },

};





export const ROUTE_ARR = Object.values(ROUTE);
