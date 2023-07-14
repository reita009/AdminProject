import styled from "styled-components";
import Colors from "../../components/colors/colors";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  background-color: ${Colors.black};
  @media (max-width: 1100px) {
    width: 100%;
    overflow: hidden;
  }
`;

export const LeftArea = styled.div`
  width: 40%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .mobile-icon {
    width: 100%;

    img {
      height: 350px;
      margin-left: auto;
      margin-right: auto;
    }
    display: none;
    @media (max-width: 1100px) {
      display: flex;
    }
  }
  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const RightArea = styled.div`
  width: 60%;
  height: 100vh;
  display: flex;
  img {
    margin: auto;
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const FormRegister = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 180px;
  border-radius: 20px;

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

  .back {
    margin-top: 12px;
  }

  @media (max-width: 1100px) {
    width: 90%;
    margin-top: 0;
  }

  .button {
    margin-top: 30px;
    @media (max-width: 1100px) {
      width: 100%;
    }
  }
`;

export const HeaderForm = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  padding: 12px;
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    color: ${Colors.green};
    margin-left: auto;
    margin-right: auto;
  }
`;

export const InputArea = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    width: 360px;
    height: 24px;
    font-family: "SkolaSans";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #7f8fa6;
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
  @media (max-width: 1100px) {
    width: 100%;
  }
`;
