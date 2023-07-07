import styled from "styled-components";
import Colors from "../../colors/colors";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${Colors.white};
  display: flex;
  flex-direction: column;
`;

export const CardNotice = styled.div`
  height: 192px;
  width: 90%;
  border-radius: 24px;
  background-color: #fff;
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 0px 20px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }

  @media (max-width: 1126px) {
    height: 600px;
    flex-direction: column;
  }

  .headerCard {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-family: sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      color: rgba(0, 15, 36, 0.5);
    }
  }

  img {
    height: 100px;
  }
  h2 {
    font-family: sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #4b4b4b;
  }
  p {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`;
