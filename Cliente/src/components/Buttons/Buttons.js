import styled from "styled-components";
import Colors from "../colors/colors";

export const DefaultButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  gap: 8px;
  width: 360px;
  height: 56px;
  background: ${Colors.blue};
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
export const SideBarButton = styled.div`
  width: 100%;
  height: 38px;
  display: flex;
  border-radius: 10px;
  margin-top: 22px;
  align-items: center;

  font-size: 17px;
  #icon {
    margin-left: 8px;
    color: ${Colors.gray};
    height: "22px";
  }
  P {
    display: flex;
    color: ${Colors.fonte};
    height: 100%;
    margin-top: 28px;
    font-weight: bold;
    margin-left: 12px;
  }
  &:hover {
    background-color: ${Colors.white};
    cursor: pointer;
    .effectBorder {
      height: 35px;
      width: 6px;
      background-color: ${Colors.blue};
      border-radius: 20px 0px 0px 20px;
    }
    #icon {
      color: ${Colors.blue};
    }
  }
`;
