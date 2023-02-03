import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Api from "../api";
import "./RegisterForm.css";

import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

function RegisterForm() {
  const navigate = useNavigate();
  // State 정의
  const [inputs, setInputs] = useState({
    userName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  function emailCheck(email) {
    const regex =
      /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i;
    return email.match(regex) !== null;
  }

  const validateForm = ({ userName, email, password, passwordConfirm }) => {
    if (userName.length < 2) {
      return "이름은 2글자 이상이어야합니다.";
    }

    if (emailCheck(email) === false) {
      return "이메일 형식이 올바르지 않습니다.";
    }
    if (password.length < 4) {
      return "비밀번호는 4글자 이상이어야합니다.";
    }
    if (password !== passwordConfirm) {
      return "비밀번호가 일치하지 않습니다.";
    }
    return true;
  };

  async function registerUser(formdata) {
    const newData = await Api.post("register", formdata);
    console.log(newData);
    alert("회원가입이 완료되었습니다!");
    navigate("/login");
  }

  const handleSubmit = (e) => {
    console.log(inputs);
    e.preventDefault();
    const validated = validateForm(inputs);
    if (typeof validated === "string") {
      alert(validated);
      return;
    }

    const { userName, email, password } = inputs;
    const formdata = { userName, email, password };
    registerUser(formdata);
  };

  return (
    <form onSubmit={handleSubmit}>
      <MDBContainer className="register-form p-3 my-5 d-flex flex-column ">
        <p>회원가입</p>
        <MDBInput
          wrapperClass="item mb-4"
          value={inputs.userName}
          label="이름"
          name="userName"
          type="text"
          onChange={handleChange}
        />

        <MDBInput
          wrapperClass="item mb-4"
          value={inputs.email}
          label="Email"
          name="email"
          type="email"
          onChange={handleChange}
        />

        <MDBInput
          wrapperClass="item mb-4"
          value={inputs.password}
          label="비밀번호"
          name="password"
          type="password"
          onChange={handleChange}
        />

        <MDBInput
          wrapperClass="item mb-4"
          value={inputs.passwordConfirm}
          label="비밀번호확인"
          name="passwordConfirm"
          type="password"
          onChange={handleChange}
        />

        <MDBBtn className="item mb-4">회원가입</MDBBtn>
      </MDBContainer>
    </form>
  );
}

export default RegisterForm;
