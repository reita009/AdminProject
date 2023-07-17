import { styled } from "styled-components";
import Colors from "../../colors/colors";

export const Container = styled.div`
  height: 100vh;
  background-color: #1a1a28;
  display: flex;
  flex-direction: column;
  @media (max-width: 1336px) {
    height: 1000000px;
  }

  .table-whrap {
    margin-top: 30px;
    height: 600px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;

    display: flex;
    flex-direction: column;
    background-color: #fff;

    overflow-x: auto;
  }
  .table-hover {
    &:hover {
      cursor: pointer;
    }
  }
`;
