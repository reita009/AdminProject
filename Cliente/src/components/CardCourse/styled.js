import styled from "styled-components";
import Colors from "../colors/colors";

export const CardConatiner = styled.div`
  height: 350px;
  width: 280px;
  background-color: #353b48;
  border-radius: 20px 20px 0px 0px;
  box-shadow: 1px 1px 6px 0px ${Colors.green};
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-top: 30px;

  .image-wrap {
    height: 100%;
    width: 100%;

    img {
      height: 100%;
      width: 100%;
      border-radius: 20px 20px 0px 0px;
    }
  }

  .card-header {
    display: flex;
    flex-direction: column;
    height: 170px;
    border-radius: 20px 20px 0px 0px;
    border-bottom: 4px solid ${Colors.green};
  }
  .card-body {
    display: flex;
    flex-direction: column;
    padding: 12px;
    border-bottom: 1px solid ${Colors.green};

    h1 {
      font-size: 22px;
      color: ${Colors.white};
      font-weight: bold;
    }
  }
  .card-footet {
    height: 70px;
    display: flex;
    div {
      display: flex;
      margin: auto;
      &:hover {
        cursor: pointer;
      }
    }
    h3 {
      font-size: 17px;
      color: ${Colors.green};
    }
    #icon {
      color: ${Colors.green};
      font-size: 22px;
      margin-left: 15px;
    }
  }
`;
