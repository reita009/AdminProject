import * as C from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";
import * as B from "../Buttons/Buttons";
import { useState, useEffect } from "react";

export const Balance = (props) => {
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
              <span>Saldo:</span>
              <FontAwesomeIcon className="icon" icon={faFileInvoiceDollar} />
              <span>R$5,558</span>
            </div>
          </div>
          <B.BalanceButton>
            <button class="button-74" role="button">
              Adicionar créditos
            </button>
          </B.BalanceButton>
        </div>
      </C.Balance>
    </>
  );
};
