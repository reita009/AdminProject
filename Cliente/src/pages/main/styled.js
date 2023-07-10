import styled from "styled-components";
import Colors from "../../components/colors/colors";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  @media (max-width: 1126px) {
    flex-direction: column;
  }
`;

export const RightArea = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 1126px) {
    width: 100%;
    height: 90vw;
  }
`;

export const LeftArea = styled.div`
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 1126px) {
    display: none;
  }

  .header-leftArea {
    height: 140px;
    background-color: ${Colors.blue};
    display: flex;
    h1 {
      margin: auto;
      color: white;
    }

    img {
      height: 90px;
      margin: auto;
    }
  }

  .body-leftArea {
    width: 100%;
    padding-top: 3%;
    margin-top: 40px;
    padding-left: 8px;
    padding-right: 8px;
  }
  .footer-leftArea {
    margin-top: auto;
    height: 150px;
    width: 100%;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    .exit-area {
      display: flex;
      margin-left: auto;
      margin-right: auto;
      cursor: pointer;
    }
    #exit-icon {
      color: red;
      height: 26px;
    }
    P {
      display: flex;
      color: ${Colors.fonte};
      font-weight: bold;
      margin-left: 12px;
    }
  }
`;

export const LeftAreaMobile = styled.div`
  @media (max-width: 1126px) {
    display: flex;
  }
  @media (min-width: 1126px) {
    display: none;
  }
  display: flex;
  background-color: ${Colors.blue};
  flex-direction: column;
  padding-bottom: 30px;
  padding-top: 30px;

  .btn-mobile-group {
    width: 100%;
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    button {
      margin-left: auto;
      margin-right: auto;
      margin-top: 12px;
      font-weight: bold;
      border-radius: 20px;
      width: 80%;
    }
  }

  .icon {
    margin-top: 200px;
    margin: auto;
    height: 45px;
    color: ${Colors.white};
    cursor: pointer;
  }
`;
