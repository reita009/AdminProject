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
    height: 180px;
    background-color: ${Colors.blue};
    display: flex;
    h1 {
      margin: auto;
      color: white;
    }
  }
`;
