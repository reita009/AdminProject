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
`;

export const TableContainer = styled.div`
  height: 600px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  background-color: #fff;

  overflow-x: auto;

  td {
    cursor: pointer;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #4b4b4b;
  }

  .footer-table {
    height: 50px;
    margin-top: auto;
    padding: 4px;
    background-color: #bacbe6;

    @media (max-width: 580px) {
      width: 470px;
    }

    .left-footer {
      font-family: sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;

      margin-right: 8px;
      margin-left: 12px;
      height: 100%;
      display: flex;
      align-items: center;
      span {
        font-family: sans-serif;
        font-style: normal;
        font-weight: bold;
      }
      .result-pages {
        height: 90%;
        width: 70px;
        border-radius: 20px;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 25px;
      }
    }
  }
`;
