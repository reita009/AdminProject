import * as C from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";
import * as B from "../Buttons/Buttons";

export const Balance = (props) => {
  return (
    <>
      <C.Balance>
        <C.BalanceTitle>{props.subject}</C.BalanceTitle>
        <div className="addCredit">
          <span>Meu Saldo:</span>

          <div className="resultCredit">
            <FontAwesomeIcon className="icon" icon={faFileInvoiceDollar} />
            <span>R$5,558</span>
            <B.BalanceButton>Adicionar créditos</B.BalanceButton>
          </div>
          <div className="NameUser">
            <p>
              Olá, <span>Julio!</span>
            </p>
          </div>
        </div>
      </C.Balance>
    </>
  );
};
