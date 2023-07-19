import { styled } from "styled-components";
import Colors from "../../colors/colors";

export const Container = styled.div`
  background-color: ${Colors.black};
  display: flex;
  flex-direction: column;
  flex-direction: column;
  overflow-y: scroll;

  @media (max-width: 1336px) {
    height: 1000000px;
  }
`;
