import { styled } from "styled-components";
import Colors from "../colors/colors";

export const Balance = styled.div`
  width: 90%;
  height: 190px;
  margin-top: 16px;
  border-radius: 15px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;

  h1 {
    font-size: 40px;
    color: ${Colors.green};
    @media (max-width: 1126px) {
      margin-bottom: 30px;
    }
  }

  @media (max-width: 1126px) {
    flex-direction: column;
    height: 250px;
    width: 400px;
  }

  .addCredit {
    margin-left: auto;
    border-radius: 20px;
    padding: 8px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: #34495e;
    @media (max-width: 1126px) {
      flex-direction: column;
      height: 300px;
      margin-left: auto;
      margin-right: auto;
    }
    span {
      font-family: sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #16a085;
      margin-right: 8px;
      @media (max-width: 1126px) {
        margin-top: 10px;
      }
    }
    .resultCredit {
      border-radius: 20px;
      height: 52px;
      padding: 6px;
      display: flex;
      align-items: center;
      .icon {
        color: ${Colors.green};
        user-select: none;
        width: 1em;
        height: 1em;
        display: inline-block;
        fill: currentColor;
        transition: fill 200ms;
        font-size: 1.5rem;
        margin-right: 10px;
      }
      @media (max-width: 1126px) {
        margin-top: 10px;
      }
      span {
        color: #fff;
      }
    }
  }
  .NameUser {
    display: flex;
    height: 100%;
    margin-left: 30px;
    margin-right: 30px;
    p {
      color: #16a085;
      margin: auto;

      span {
        font-family: sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 24px;
        text-align: center;
        color: #f39c12;
        margin-right: 8px;
      }
    }
  }
`;

export const BalanceTitle = styled.h1`
  font-family: sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  color: #4b4b4b;
  margin-left: 20px;
  margin-right: 60px;
  margin-left: 10px;

  @media (max-width: 1126px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Hidem = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${Colors.gray};
  opacity: calc(0.5);
  z-index: 1;
  position: absolute;
  display: flex;
`;
export const BlancePainel = styled.div`
  width: 100vw;
  z-index: 2;
  position: absolute;
  display: flex;

  .painel {
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    background-color: ${Colors.black};
    height: 650px;
    width: 850px;
    border-radius: 20px;
    padding: 8px;
    z-index: 2;
    display: flex;
    flex-direction: column;

    .header-painel {
      display: flex;
      width: 100%;
      align-items: center;
      margin-top: 12px;

      h2 {
        color: ${Colors.green};
        margin-left: auto;
        margin-right: auto;
      }
      span {
        font-size: 40px;
        margin-top: -30px;
        margin-right: 12px;
        cursor: pointer;
      }
    }
    .header-subtitle {
      width: 100%;
      display: flex;

      span {
        color: #006266;
        width: 290px;
        font-size: 16px;
        font-weight: 600;
        margin-left: auto;
        margin-right: auto;
      }
    }
    .body-painel {
      width: 100%;
      margin-top: 60px;
      height: 150px;
      display: flex;
      flex-direction: column;

      .card-group {
        margin: auto;
      }

      .credit-info {
        display: flex;
        flex-direction: column;

        .input-group {
          display: flex;
          .button-74 {
            margin-top: 20px;
            margin-left: 12px;
          }
          .info {
            width: 600px;
            color: #006266;
            margin-bottom: 20px;

            span {
              color: ${Colors.green};
            }
          }

          .Ticket-area {
            display: flex;
            flex-direction: column;
            margin-left: auto;
            margin-right: auto;

            margin-top: 20px;
            .input-area {
              margin-left: auto;
              margin-right: auto;
              .input-voucher {
                margin-left: 20px;
                width: 280px;
                input {
                  width: 200px;
                }
              }
            }
            #button-wrap {
              margin-left: auto;
              margin-right: auto;
            }
          }
        }

        .info-title {
          margin-left: auto;
          margin-right: auto;
          margin-top: 20px;
          margin-bottom: 20px;
          span {
            color: #006266;
            font-size: 26px;
          }
        }
        .input-area {
          display: flex;
          flex-direction: column;
          width: 350px;
          height: 100px;
          padding: 8px;
          margin-left: 20px;
          label {
            font-size: 20px;
            color: #006266;
            font-weight: bold;
          }
          h1 {
            color: ${Colors.green};
          }
          .input-voucher {
            display: flex;
            margin-top: 8px;

            span {
              color: ${Colors.white};
              margin-left: 4px;
              margin-right: 4px;
            }
            #input-number {
              width: 100px;
            }
          }
        }
      }
    }
  }
`;

export const CardCredit = styled.div`
  height: 120px;
  width: 200px;
  margin-left: 15px;
  background-color: #34495e;
  border-radius: 20px;
  padding: 14px;
  cursor: pointer;

  border: 2px solid ${(props) => (props.active ? "#2ecc71" : "none")};
  display: flex;
  flex-direction: column;
  .icon {
    font-size: 25px;
  }
  span {
    color: ${Colors.green};
    font-size: 20px;
    text-align: center;
    margin-top: 15px;
  }
`;
