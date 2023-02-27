import { useContext } from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const RequireAuth = ({ allowedRole }) => {
  //   const isLoggedIn = !!localStorage.getItem("token");
  const location = useLocation();
  const { isLoggedIn, isAdmin } = useContext(AuthContext);
  //   여기서 usecontext로 isLoggedIn을 가져오면, /account 리프레쉬했을 때, 또 로그인창으로 리다이렉트되는 문제...
  return isLoggedIn ? (
    allowedRole === "admin" && (isAdmin === false || isAdmin === undefined) ? ( //관리자 전용페이지
      <Navigate
        to={"/unaurhotized"}
        state={{ redirectUrl: location.pathname + location.search + location.hash }}
      />
    ) : (
      <Outlet />
    )
  ) : (
    <Navigate
      to={"/login"}
      state={{ redirectUrl: location.pathname + location.search + location.hash }}
    />
  );
};
export default RequireAuth;
