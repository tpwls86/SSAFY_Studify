//아이디를 확인해주는 컴포넌트입니다.
import React, { useState } from "react";
import LoginModal from "./LoginModal";
import { useCookies } from "react-cookie";
import axios from "axios";
import "./LoginPW.css";

const LoginPW = (props) => {
  console.log(props);
  // const [loginInfo, setValues] = useState("");
  // const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  // const [isRemember, setIsRemember] = useState(false);
  //처음에 모달창을 꺼놓기 위해 초기값을 false로 줍니다.
  const [modalOpen, setModalOpen] = useState(false);

  const [cookies] = useCookies(['useremail']);

  console.log(cookies);

  //모달창을 열어주는 함수입니다.
  const showModal = () => {
    setModalOpen(true);
  };

  //모달창을 닫아주는 함수입니다.
  const closeModal = () => {
    setModalOpen(false);
  };

  //비밀번호가 바뀔때마다 확인해주는 함수.
  const handleChange = (event) => {
    const passwordCurrent = event.target.value;
    setPassword(passwordCurrent);
    // setValues({
    //   ...loginInfo,
    //   [event.target.name]: event.target.value,
    // });
  };

  //다음 버튼 클릭시 비밀번호가 아이디와 일치하는지 확인해줍니다.
  //LoginID로 부터 ID를 props를 통해 받아와서 해당 ID와 PW가 맞는지 확인시켜주어야함.
  //Map을 통해 Back에서 저장될것같다.
  const check = (event) => {
    if (Password === "") {
      alert("비밀번호를 입력하지 않았습니다.");
      event.preventDefault();
    } else {
    }
    //만약 비밀번호도 일치할시에 Navigate를 이용하여 대시보드로 이동시켜줄것.
  };

  //비밀번호 찾기를 누르면 Modal창을 열어주기위해서 showModal을 사용합니다.
  const findPw = () => {
    showModal();
    console.log(modalOpen);
  };

  //여기서 axios 통신을 사용하여 back에 아이디가 있는지 확인해줍니다.
  //back에서는 for문으로 찾아주는건가?..
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://192.168.31.27:8080/api/v1/users/signin",
        {
          email: cookies.useremail,
          password: Password,
        }
      );
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          // name="email"
          value={Password}
          onChange={handleChange}
        />
        <button type="submit" onClick={check}>
          다음
        </button>
      </form>
      <div onClick={findPw}>비밀번호 잊어버리셨나요?</div>
      {modalOpen && <LoginModal setModalOpen={closeModal}></LoginModal>}
    </React.Fragment>
  );
};

export default LoginPW;
