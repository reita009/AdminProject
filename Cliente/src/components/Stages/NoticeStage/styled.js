import styled from "styled-components";
import Colors from "../../colors/colors";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #1a1a28;
  display: flex;
  flex-direction: column;

  @media (max-width: 1336px) {
    height: 1000000px;
  }
`;

export const CardNotice = styled.div`
  height: 252px;
  width: 90%;
  border-radius: 24px;
  background-color: #34495e;
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;
  color: ${Colors.gray};
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
  h3 {
    color: ${Colors.green};
  }
  cursor: pointer;
  &:hover {
    background-color: #2c3d4e;
  }
  @media (max-width: 1026px) {
    height: 60vh;
    flex-direction: column;
    padding-top: 15px;
  }
  @media (max-width: 622px) {
    height: 70vh;
    flex-direction: column;
  }

  .right {
    margin-left: 30px;
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
