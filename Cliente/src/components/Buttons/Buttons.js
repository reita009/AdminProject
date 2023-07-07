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

  background-color: ${(props) => (props.active ? " #f5f8fa" : "#fff")};
  border-left: ${(props) => (props.active ? " 7px solid #466aa9" : "none")};

  font-size: 17px;

  @media (max-width: 1500px) {
    height: 59px;
    p {
      align-items: center;
    }
  }
  #icon {
    margin-left: 8px;
    color: ${(props) => (props.active ? "#466aa9" : "#bbbbbb")};
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
    background-color: #f5f8fa;
    border-left: 7px solid #466aa9;
    cursor: pointer;

    #icon {
      color: #466aa9;
    }
  }
`;

export const BalanceButton = styled.button`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 8px 16px;
  width: 175px;
  height: 40px;
  background: #466aa9;
  border-radius: 80px;
  font-family: sans-serif;
  font-style: normal;
  font-weight: 700;
  border: none;
  color: #ffffff;
  cursor: pointer;
`;

export const MobileButton = styled.button`
  width: 80%;
  height: 40px;
  background-color: #466aa9;
  border: none;
`;
