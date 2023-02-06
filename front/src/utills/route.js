import Login from '../pages/user/Login'
import Register from '../pages/user/Register'
import AccountSercurity from '../pages/user/AccountSecurity'
import AccountDelete from '../pages/user/AccountDelete'
import Account from '../pages/user/Account'
import Slider from '../components/Slider'
import CategoryAdd from '../pages/category/CategoryAdd'
import ProductAdd from '../pages/product/ProductAdd'
import ProductList from '../pages/product/ProductList';
import Cart from '../pages/cart/Cart'
import Order from '../pages/cart/Order'
import OrderComplete from '../pages/cart/OrderComplete'
import Admin from '../pages/admin/Admin'

export const ROUTE = {
    HOME: {
        path: "/",
        link: "/",
        element: Slider,
    },
    LOGIN: {
        path: "/login",
        link: "/login",
        element: Login,
    },
    REGISTER: {
        path: "/register",
        link: "/register",
        element: Register,
    },
    ACCOUNT: {
        path: "/account",
        link: "/account",
        element: Account,
    },
    ACCOUNT_SIGNOUT: {
        path: "/account/signout",
        link: "/account/signout",
        element: AccountDelete,
    },
    ACCOUNT_ORDERS: {
        path: "/account/orders",
        link: "/account/orders",
        element: Account,
    },
    MYACCOUNT: {
        path: "/account/security",
        link: "/account/security",
        element: AccountSercurity,
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