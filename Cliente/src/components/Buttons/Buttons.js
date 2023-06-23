import styled from "styled-components";

export const DefaultButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  gap: 8px;
  width: 360px;
  height: 56px;
  background: #466aa9;
  border-radius: 50px;
  border: none;
  color: #fff;
  font-size: 16px;
  margin-top: 23px;
  cursor: pointer;
  &:hover {
    background-color: #2f67d4;
  }
`;
