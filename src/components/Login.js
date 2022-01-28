import styled from "styled-components";
import React from "react";
import logo from "../images/login-logo.svg";
import google from "../images/google.svg";
import hero from "../images/login-hero.svg";
import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signInApi } from "../actions";


const Login = () => {
  const state = useSelector((state) => state.userReducer.user);

  const dispatch = useDispatch();

  return (
    <>
      {state && <Navigate to="/home" replace />}

      <Nav>
        <Logo>
          <Link to="/">
            <img src={logo} />
          </Link>
        </Logo>
        <SignInSect>
          <Join onClick={() => dispatch(signInApi())}>Join now</Join>
          <SignIn onClick={() => dispatch(signInApi())}>Sign in</SignIn>
        </SignInSect>
      </Nav>

      <Main>
        <Section>
          <TitleSect>
            <h1>Welcome to your professional community</h1>
            <Form>
              <Google onClick={() => dispatch(signInApi())}>
                <img src={google} />
                <span>Sign in with Google</span>
              </Google>
            </Form>
          </TitleSect>

          <img className="login-hero" src={hero} />
        </Section>
      </Main>
    </>
  );
};
const Nav = styled.nav`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0 16px 0;
`;
const Logo = styled.div`
  img {
    width: 135px;
  }

  max-width: 90vw;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 0;
    img {
      width: 84px;
    }
  }
`;
const SignInSect = styled.div``;
const SignIn = styled.a`
  display: inline-block;
  background-color: rgba(0, 0, 0, 0);
  color: #0a66c2;
  height: 40px;
  padding: 0 24px;
  box-shadow: inset 0 0 0 1px #0a66c2;
  border-radius: 24px;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  text-align: center;
  vertical-align: middle;
  transition-duration: 170ms;
  cursor: pointer;
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    box-shadow: inset 0 0 0 1px #0073b1, inset 0 0 0 2px #006097,
      inset 0 0 0 1px rgb(0 0 0 / 0%);
  }
  @media (max-width: 480px) {
    display: none;
  }
`;
const Join = styled.a`
  display: inline-block;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
  margin-right: 12px;
  padding: 0 12px;
  border-radius: 4px;
  vertical-align: middle;
  transition-duration: 170ms;

  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
  }
  @media (max-width: 480px) {
    margin: 0;
    padding: 0;
    color: #0a66c2;
  }
`;
const Main = styled.main`
  overflow-x: hidden;
  display: flex;
  justify-content: center;
`;
const Section = styled.section`
  max-width: 90%;
  display: flex;
  padding-top: 40px;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
    padding: 24px 16px 0 16px;
  }
  .login-hero {
    width: 700px;
    height: 560px;
    color: #eeeeeee6;
  }

  @media screen and (max-width: 768px) {
    .login-hero {
      width: 500px;
      height: 500px;
    }
  }
  @media screen and (max-width: 540px) {
    .login-hero {
      width: 374px;
      height: 214px;
    }
  }
`;
const TitleSect = styled.div`
  flex-shrink: 0;
  width: 55%;
  @media (max-width: 768px) {
    width: 100%;
  }
  h1 {
    font-size: 56px;
    color: rgba(143, 88, 73, 1);
    font-weight: 200;
    line-height: 1.2;
    @media (max-width: 768px) {
      font-size: 32px;
    }
  }
`;
const Form = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    height: 150px;
  }
`;
const Google = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  padding: 0 32px;
  width: 400px;
  background-color: white;
  border-radius: 28px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 20px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  transition: 170ms;
  cursor: pointer;

  span {
    margin-left: 24px;
  }
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
      inset 0 0 0 2px rgb(0 0 0 / 75%), inset 0 0 0 1px rgb(0 0 0 / 0%);
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
/*const mapStateToProps=(state)=>{
  return{}
}
const mapDispatchToProps=(dispatch)=>({});*/
export default Login;
