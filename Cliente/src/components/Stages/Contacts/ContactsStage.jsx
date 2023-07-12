import { Balance } from "../../Balance/Balance";
import * as C from "./styled";

export const ContactsStage = () => {
  return (
    <>
      <C.Container>
        <Balance subject="Lista de Usuários" />
        <div className="cardGroup">
          <C.CardDashboard>
            <h3>Tabela de referência</h3>
            <p>valores base:</p>
            <h1>Padrão</h1>
          </C.CardDashboard>
          <C.CardDashboard>
            <h3>Total de pedidos realizados</h3>
            <h1>1.548 pedidos</h1>
          </C.CardDashboard>
          <C.CardDashboard>
            <h3>Deliverys automatizados</h3>
            <p>
              Quantidade de deliverys programados para acionarem o entregador.
            </p>
            <h1>26 deliverys programados</h1>
          </C.CardDashboard>
          <C.CardDashboard>
            <h3>Tempo médio total</h3>
            <h1>3.654 horas</h1>
          </C.CardDashboard>
        </div>
      </C.Container>
    </>
  );
};
