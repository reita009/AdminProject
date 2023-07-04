import styled from "styled-components";
import Colors from "../../components/colors/colors";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const LeftArea = styled.div`
  width: 14%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .header-leftArea {
    height: 140px;
    background-color: ${Colors.blue};
    display: flex;
    h1 {
      margin: auto;
      color: white;
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
