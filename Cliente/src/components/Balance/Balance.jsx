import * as C from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";
import * as B from "../Buttons/Buttons";
import { useState, useEffect } from "react";
import { Api } from "../../Api";

import {
  faCreditCard,
  faNewspaper,
  faCommentsDollar,
} from "@fortawesome/free-solid-svg-icons";

export const Balance = (props) => {
  const [sessionUser, setSessionUser] = useState([]);
  const [balance, setBalance] = useState([]);
  const [showCash, setShowCash] = useState(false);
  const [showPainel, setShowPainel] = useState(false);
  const [showCreditCard, setShowCreditCard] = useState(true);

  const getSessionUsers = async () => {
    let json = await Api.getSessionUser();
    setSessionUser(json);
  };
  const getBalance = async () => {
    let json = await Api.getbalance();
    setBalance(json);
  };
  const handleShowCash = async () => {
    console.log(balance.finance[sessionUser.id - 1].saldo);
    setShowCash(!showCash);
  };
  const handleShowPainelCredit = () => {
    setShowPainel(!showPainel);
  };
  const handleShowCreitCard = () => {
    setShowCreditCard(!showCreditCard);
  };

  useEffect(() => {
    getSessionUsers();

    getBalance();
  }, []);

  return (
    <>
      <C.Balance>
        <C.BalanceTitle>{props.subject}</C.BalanceTitle>

        <div className="addCredit">
          <div className="NameUser">
            <p>
              Olá, <span>{props.name}!</span>
            </p>
          </div>
          <div className="resultCredit">
            <div>
              <button onClick={handleShowCash} className="btn btn-success">
                {!showCash && <span>Mostrar Saldo</span>}
                {showCash && (
                  <>
                    <FontAwesomeIcon
                      className="icon"
                      icon={faFileInvoiceDollar}
                    />
                    <span>
                      R$:{balance.finance[sessionUser.id - 1].saldo},00
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>
          <B.BalanceButton>
            <button
              onClick={handleShowPainelCredit}
              class="button-74"
              role="button"
            >
              Adicionar créditos
            </button>
          </B.BalanceButton>
        </div>
      </C.Balance>
      {showPainel && (
        <>
          <C.Hidem></C.Hidem>
          <C.BlancePainel>
            <div className="painel">
              <div className="header-painel">
                <h2>Adicionar créditos</h2>
                <span onClick={handleShowPainelCredit}>X</span>
              </div>
              <div className="header-subtitle">
                <span>Selecione o método de pagamento:</span>
              </div>
              <div className="body-painel">
                <div className="card-group">
                  <C.CardCredit
                    onClick={handleShowCreitCard}
                    active={showCreditCard}
                  >
                    <FontAwesomeIcon
                      className="icon"
                      icon={faCreditCard}
                      style={{ color: "#21e61e" }}
                    />
                    <span>Cartão de crédito</span>
                  </C.CardCredit>
                  <C.CardCredit>
                    <FontAwesomeIcon
                      className="icon"
                      icon={faNewspaper}
                      style={{ color: "#21e61e" }}
                    />
                    <span>Boleto bancário</span>
                  </C.CardCredit>
                  <C.CardCredit>
                    <FontAwesomeIcon
                      className="icon"
                      icon={faCommentsDollar}
                      style={{ color: "#21e61e" }}
                    />
                    <span>Pix</span>
                  </C.CardCredit>
                </div>
                {showCreditCard && (
                  <>
                    <div className="credit-info">
                      <div className="info-title">
                        <span>Dados do cartão</span>
                      </div>

                      <div className="input-group">
                        <div className="input-area">
                          <label>Nome do titular</label>
                          <h1>{props.name}</h1>
                        </div>

                        <div className="input-area">
                          <label>Valor desejado</label>
                          <div className="input-voucher">
                            <span>R$</span>{" "}
                            <input
                              id="input-number"
                              className="form-control"
                              type="number"
                            />
                            <span> ,00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </C.BlancePainel>
        </>
      )}
    </>
  );
};
