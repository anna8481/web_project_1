import React, { useState, useContext } from "react";
import "./User.css";
import * as Api from "../../utills/api";
import { ROUTE } from "../../utills/route";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Title from "../../components/Title";
import { AuthContext } from "../../utills/AuthContext";

function Login() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = inputs;

    try {
      const response = await Api.post("login", {
        email,
        password,
      });

      auth.login(response.data.token, response.data.isAdmin);
      if (location.state?.redirectUrl) {
        navigate(location.state.redirectUrl);
      } else {
        navigate("/");
      }
    } catch (err) {
      alert(err.response.data.reason);
    }
  };

  return (
    <>
      <div className="section">
        <div className="container-center">
          <Title></Title>
          <form onSubmit={handleLogin} className="user-form">
            <input
              className="input"
              value={inputs.email}
              label="Email"
              name="email"
              type="email"
              placeholder="email"
              onChange={handleChange}
            />
            <input
              className="input"
              value={inputs.password}
              label="Password"
              name="password"
              type="password"
              placeholder="password"
              onChange={handleChange}
            />
            <button className="user-button">로그인</button>
          </form>
          <Link
            to={ROUTE.FIND_USER_PASSWORD.link}
            style={{
              textAlign: "center",
              color: "#999",
              marginTop: "1rem",
              textDecoration: "underline",
            }}
          >
            비밀번호 찾기
            {/* <p ></p> */}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
