import styled from "styled-components";
import img from "../../assets/bg-login.jpg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  @media (max-width: 1000px) {
    width: 100%;
    overflow: hidden;
  }
`;

export const LeftArea = styled.div`
  width: 40%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const HeaderLeftArea = styled.header`
  width: 100%;
  height: 100px;
  background-color: #2f67b2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  display: flex;
`;

export const BodyLeftArea = styled.form`
  width: 452px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  padding: 17px;
`;

export const TitleArea = styled.div`
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
    color: #4b4b4b;
    margin-right: 12px;
  }
  p {
    margin-top: 12px;
    width: 382px;
    height: 24px;
    left: 157px;
    top: 296px;
    font-family: "SkolaSans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #4b4b4b;
    margin-bottom: 40px;
  }
`;

export const InputArea = styled.div`
  height: 100px;
  width: 100%;

  label {
    width: 360px;
    height: 24px;
    font-family: "SkolaSans";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #4b4b4b;
    flex: none;
    align-self: stretch;
  }
`;

export const Input = styled.input`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 8px;
  width: 360px;
  height: 64px;
  background: #ffffff;
  border: 2px solid #eaedf0;
  border-radius: 16px;
  -webkit-flex: none;
  -ms-flex: none;
  flex: none;
  -webkit-order: 1;
  -ms-flex-order: 1;
  order: 1;
  -webkit-align-self: stretch;
  -ms-flex-item-align: stretch;
  align-self: stretch;
  -webkit-box-flex: 0;
  -webkit-flex-grow: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  margin-top: 8px;
  margin-bottom: 40px;
  outline: none;
`;

export const ForgotPasswordArea = styled.div`
  font-family: sans-serif;
  display: flex;
  padding: 13px;
  width: 100%;
  input {
    color: #466aa9;
    border-radius: 4px;
    height: 18px;
    width: 18px;
    margin-right: 11px;
  }
  p {
    width: 92px;
    height: 24px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #4b4b4b;
  }
  .link {
    width: 170px;
    height: 24px;
    font-family: "SkolaSans";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #466aa9;
    text-decoration: none;
  }
`;

export const TermsOfUse = styled.div`
  height: 44px;
  width: 400px;
  margin-top: 10px;
  p {
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #4b4b4b;
  }
  .link {
    width: 170px;
    height: 24px;
    font-family: "SkolaSans";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #466aa9;
    text-decoration: none;
  }
`;

export const HelpArea = styled.div`
  width: 249px;
  height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 40px;
  p {
    color: #4b4b4b;
    font-family: "SkolaSans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    span {
      color: #466aa9;
      font-weight: bold;
      margin-left: 5px;
    }
  }
`;

export const RightArea = styled.div`
  width: 60%;
  height: 100vh;
  background-color: aliceblue;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1000px) {
    display: none;
  }
`;
export const BgEffect = styled.div`
  position: absolute;
  background-color: #2f67b2;
  display: flex;
  height: 100vh;
  width: 60%;
  opacity: 0.3;
  @media (max-width: 1000px) {
    display: none;
  }
`;
