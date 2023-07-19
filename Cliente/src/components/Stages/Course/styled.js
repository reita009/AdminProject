import styled from "styled-components";

export const Container = styled.div`
  height: 1000px;
  background-color: #1a1a28;
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;

  overflow-y: scroll;

  .cards-group {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 12px;
    justify-content: space-around;
  }
`;
