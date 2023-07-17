import { Balance } from "../../Balance/Balance";
import * as C from "./styled";
export const FinanceStage = () => {
  return (
    <>
      <C.Container>
        <Balance subject="Extrato financeiro" />
        <C.TableContainer>
          <div className="footer-table">
            <div className="left-footer">
              <span>Itens por Página</span>
              <div className="result-pages">5</div>
            </div>
          </div>
        </C.TableContainer>
      </C.Container>
    </>
  );
};
