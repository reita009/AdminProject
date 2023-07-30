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
  const [showCreditCard, setShowCreditCard] = useState(false);
  const [showTicket, setShowTicket] = useState(false);
  const [showPix, setShowPix] = useState(true);

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
    setShowTicket(false);
    setShowPix(false);
  };
  const handleShoTicketCard = () => {
    setShowCreditCard(false);
    setShowTicket(!showTicket);
    setShowPix(false);
  };
  const handleShowPix = () => {
    setShowCreditCard(false);
    setShowTicket(false);
    setShowPix(!showPix);
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
                  <C.CardCredit
                    onClick={handleShoTicketCard}
                    active={showTicket}
                  >
                    <FontAwesomeIcon
                      className="icon"
                      icon={faNewspaper}
                      style={{ color: "#21e61e" }}
                    />
                    <span>Boleto bancário</span>
                  </C.CardCredit>
                  <C.CardCredit onClick={handleShowPix} active={showPix}>
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
                            <span>R$</span>
                            <input
                              id="input-number"
                              className="form-control"
                              type="number"
                            />
                            <span> ,00</span>
                          </div>
                        </div>
                        <B.BalanceButton>
                          <button class="button-74" role="button">
                            Adicionar crédito
                          </button>
                        </B.BalanceButton>
                      </div>
                    </div>
                  </>
                )}
                {showTicket && (
                  <>
                    <div className="credit-info">
                      <div className="info-title">
                        <span>Valor desejado</span>
                      </div>

                      <div className="input-group">
                        <div className="Ticket-area">
                          <div className="input-area">
                            <div className="input-voucher">
                              <span>R$</span>
                              <input
                                id="input-number-ticket"
                                className="form-control"
                                type="number"
                              />
                              <span> ,00</span>
                            </div>
                          </div>
                          <div className="info">
                            <span>Atenção:</span> após o pagamento do boleto,
                            poderá levar até 3 dias úteis para que o valor
                            carregado apareça no seu saldo de créditos.
                          </div>
                          <B.BalanceButton id="button-wrap">
                            <button class="button-74" role="button">
                              Adicionar crédito
                            </button>
                          </B.BalanceButton>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {showPix && (
                  <>
                    <div className="credit-info">
                      <div className="info-title">
                        <span>Valor desejado</span>
                      </div>

                      <div className="input-group">
                        <div className="Ticket-area">
                          <div className="input-area">
                            <div className="input-voucher">
                              <span>R$</span>
                              <input
                                id="input-number-ticket"
                                className="form-control"
                                type="number"
                              />
                              <span> ,00</span>
                            </div>
                          </div>
                          <div className="info">
                            <span>Atenção:</span> após o pagamento do pix,
                            aguarde alguns instantes até que seu saldo seja
                            atualizado
                          </div>
                          <B.BalanceButton id="button-wrap">
                            <button class="button-74" role="button">
                              Gerar pix
                            </button>
                          </B.BalanceButton>
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
