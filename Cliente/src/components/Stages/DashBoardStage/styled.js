import { styled } from "styled-components";
import Colors from "../../colors/colors";

export const Container = styled.div`
  height: 100vh;
  background-color: ${Colors.white};
  display: flex;
  flex-direction: column;
  @media (max-width: 1336px) {
    height: 1000000px;
  }

  .cardGroup {
    padding-top: 30px;
    padding-left: 75px;
    padding-right: 75px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    @media (max-width: 1126px) {
      padding-top: 15px;
      padding-left: 15px;
      padding-right: 15px;
    }
  }
`;

export const CardDashboard = styled.div`
  width: 470px;
  height: 200px;
  background: #ffffff;
  margin-bottom: 40px;
  border-radius: 24px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  padding: 30px;
  flex-direction: column;

  h3 {
    font-family: sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    width: 100%;
    height: 24px;
    color: #4b4b4b;
    margin-bottom: 16px;
  }
  p {
    width: 100%;
    height: 24px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #4b4b4b;
    margin-bottom: 47px;
  }
  h1 {
    font-family: sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 36px;
    color: #466aa9;
  }
`;
