import Login from "../pages/user/Login";
import Register from "../pages/user/Register";
import AccountSercurity from "../pages/user/AccountSecurity";
import AccountDelete from "../pages/user/AccountDelete";
import Account from "../pages/user/Account";
import Main from "../components/Main";
import CategoryAdd from "../pages/category/CategoryAdd";
import ProductAdd from "../pages/product/ProductAdd";
import ProductList from "../pages/product/ProductList";
import ProductDetail from "../pages/product/ProductDetail";
import Cart from "../pages/cart/Cart";
import Order from "../pages/cart/Order";
import OrderComplete from "../pages/cart/OrderComplete";
import Admin from "../pages/admin/Admin";
import CategoryManage from "../pages/category/CategoryManage";
import OrderHistory from "../pages/user/OrderHistory";
import OrderManage from "../pages/admin/OrderManage";
import UserManage from "../pages/admin/UserManage";
import FindUserPassword from "../pages/user/FindUserPassword";
// import ProtectedRoute from "./ProtectedUserRoute";

export const ROUTE = {
  HOME: {
    path: "/",
    link: "/",
    element: Main,
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
    protected: "user",
  },
  ACCOUNT_SIGNOUT: {
    path: "/account/signout",
    link: "/account/signout",
    element: AccountDelete,
    protected: "user",
  },
  ACCOUNT_ORDERS: {
    path: "/account/orders",
    link: "/account/orders",
    element: OrderHistory,
    protected: "user",
  },
  MYACCOUNT: {
    path: "/account/security",
    link: "/account/security",
    element: AccountSercurity,
    protected: "user",
  },
  ADMIN: {
    path: "/admin",
    link: "/admin",
    element: Admin,
    protected: "admin",
  },
  ADMIN_ORDERS: {
    path: "/admin/orders",
    link: "/admin/orders",
    element: OrderManage,
    protected: "admin",
  },
  ADMIN_USERS: {
    path: "/admin/users",
    link: "/admin/users",
    element: UserManage,
    protected: "admin",
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
    protected: "user",
  },
  ORDER_COMPLETE: {
    path: "/order/complete",
    link: "/order/complete",
    element: OrderComplete,
    protected: "user",
  },
  CATEGORY_ADD: {
    path: "/category/add",
    link: "/category/add",
    element: CategoryAdd,
    protected: "admin",
  },
  CATEGORY_MANAGE: {
    path: "/category/manage",
    link: "/category/manage",
    element: CategoryManage,
    protected: "admin",
  },
  PRODUCT_ADD: {
    path: "/product/add",
    link: "/product/add",
    element: ProductAdd,
    protected: "admin",
  },
  PRODUCT_LIST: {
    path: "/product/list/:category",
    link: "/product/list/:category",
    element: ProductList,
  },
  PRODUCT_DETAIL: {
    path: "/product/detail/:id",
    link: "/product/detail/:id",
    element: ProductDetail,
  },
  FIND_USER_PASSWORD: {
    path: "/login/finduserpassword",
    link: "/login/finduserpassword",
    element: FindUserPassword,
    protected: "user",
  },
};

export const ROUTE_ARR = Object.values(ROUTE);

/* {ROUTE_ARR.map((route, index) => {
              return (
                <Route
                  path={route.path}
                  element={
                    route.protected ? (
                      <RequireAuth>
                        <route.element />
                      </RequireAuth>
                    ) : (
                      <route.element />
                    )
                  }
                  key={index}
                />
              );
            })} */
