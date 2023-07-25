import * as C from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";
import * as B from "../Buttons/Buttons";
import { useState, useEffect } from "react";
import { Api } from "../../Api";

export const Balance = (props) => {
  const [sessionUser, setSessionUser] = useState([]);
  const [balance, setBalance] = useState([]);
  const [showCash, setShowCash] = useState(false);

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
            <button class="button-74" role="button" onClick={handleShowCash}>
              Adicionar créditos
            </button>
          </B.BalanceButton>
        </div>
      </C.Balance>
    </>
  );
};
