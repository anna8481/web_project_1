import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { ROUTE } from "./route";

const ProtectedRoute = (props) => {
  const isLoggedIn = !!localStorage.getItem("token");
  //   const { isLoggedIn } = useContext(AuthContext);
  //   const navigate = useNavigate();  여기서 usecontext로 isLoggedIn을 가져오면, /account 리프레쉬했을 때, 또 로그인창으로 리다이렉트되는 문제...
  return isLoggedIn ? props.children : <Navigate to={ROUTE.LOGIN.link} />;
};
export default ProtectedRoute;
