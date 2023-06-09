import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../store/LoginStore";

import Topbarstyle from "../../Style/Topbar/Topbar.module.css";
import logo from "../../assets/image/logo.png";
import loginImg from "../../assets/image/login.png";
import logoutImg from "../../assets/image/logout.png";
import { useEffect } from "react";

const Topbar = () => {
  const navigate = useNavigate();
  const userToken = useSelector((state) => state.token.accesstoken);
  const dispatch = useDispatch();
  const [haveToken, setHaveToken] = useState(false);
  console.log(userToken);

  useEffect(() => {
    if (userToken === " ") {
      setHaveToken(false);
    } else {
      setHaveToken(true);
    }
  }, []);

  const logout = () => {
    sessionStorage.clear(); //세션스토리지에 저장된 모든 값들을 삭제해줍니다.
    dispatch(loginActions.saveToken(" ")); //빈값 보내기(리덕스의 값 비워주기.)
    if (haveToken === false) {
      setHaveToken(true);
    } else {
      setHaveToken(false);
    }
  };

  const gotoMain = () => {
    //이미지를 눌렀을때 메인페이지로 가는 것
    if (userToken === " ") {
      //토큰이 없으면?
      navigate("/");
    } else {
      //토큰이 있다면?
      navigate("/mainpage");
    }
  };

  return (
    <React.Fragment>
      <div className={Topbarstyle.topbar}>
        <div className={Topbarstyle.topbar_left}>
          <div className={Topbarstyle.section}>
            <img
              className={Topbarstyle.logo}
              src={logo}
              alt="logo"
              onClick={gotoMain}
            />
          </div>
          <div className={Topbarstyle.section}>
            {haveToken && (
              <Link to="/study/rounge" className={Topbarstyle.text_link}>
                스터디 라운지
              </Link>
            )}
            {!haveToken && (
              <Link to="/user/login" className={Topbarstyle.text_link}>
                스터디 라운지
              </Link>
            )}
          </div>
          {haveToken && (
            <div className={Topbarstyle.section}>
              <Link to="/ranking" className={Topbarstyle.text_link}>
                랭킹
              </Link>
            </div>
          )}
          {!haveToken && (
            <div className={Topbarstyle.section}>
              <Link to="/user/login" className={Topbarstyle.text_link}>
                랭킹
              </Link>
            </div>
          )}
        </div>
        <div className={Topbarstyle.section}>
          {haveToken && (
            <>
              <Link to="/" className={Topbarstyle.text_link} onClick={logout}>
                <div className={Topbarstyle.login}>
                  <img src={logoutImg} alt="로그아웃" />
                  {/* <p className={Topbarstyle.logouttext}>로그아웃</p> */}
                </div>
              </Link>
            </>
          )}
          {!haveToken && (
            <>
              <Link to="/user/login" className={Topbarstyle.text_link}>
                <div className={Topbarstyle.login}>
                  <img src={loginImg} alt="로그인" />
                  {/* <p className={Topbarstyle.logintext}>로그인</p> */}
                </div>
              </Link>
            </>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Topbar;
