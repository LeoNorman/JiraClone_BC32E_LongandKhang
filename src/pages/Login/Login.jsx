import React from "react";
import styled from "styled-components";
import Icon from "./Icon";
import style from "./Login.module.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { usersAction } from "../../store/actions/usersAction";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = (props) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const FacebookBackground =
    "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  const InstagramBackground =
    "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
  const TwitterBackground =
    "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
  return (
    <form
      onSubmit={handleSubmit((values) => {
        const action = usersAction.signInAction(values);
        dispatch(action);
      })}
      className={`${style["bodyLogin"]}`}
    >
      <MainContainer>
        <WelcomeText>
          <NavLink style={{ color: "white", fontSize: "15px" }} to="/register">
            Not Account?
          </NavLink>
        </WelcomeText>
        <div className={`${style["inputContainer"]}`}>
          <input
            className={`${style["input"]}`}
            {...register("email", { required: true })}
            type="email"
            placeholder="Email"
            name="email"
          />
          {errors?.email?.type === "required" && (
            <p className="text-red-500">Chưa nhập email!</p>
          )}
          <input
            className={`${style["input"]}`}
            {...register("passWord", { required: true })}
            minLength={6}
            type="password"
            placeholder="Password"
            name="passWord"
          />
        </div>
        <div className={`${style["buttonContainer"]}`}>
          <button className={`${style["buttonn"]}`} type="submit">
            Sign in
          </button>
        </div>
        <LoginWith>OR LOGIN WITH</LoginWith>
        <HorizontalRule />
        <IconsContainer>
          <Icon color={FacebookBackground}>
            <FaFacebookF />
          </Icon>
          <Icon color={InstagramBackground}>
            <FaInstagram />
          </Icon>
          <Icon color={TwitterBackground}>
            <FaTwitter />
          </Icon>
        </IconsContainer>
        <ForgotPassword>Forgot Password ?</ForgotPassword>
      </MainContainer>
    </form>
  );
};

export default Login;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 80vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 321px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 1rem 0 2rem 0;
`;

const LoginWith = styled.h5`
  cursor: pointer;
  font-size: 1rem !important;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1rem 0 1rem 0;
  width: 80%;
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
`;
