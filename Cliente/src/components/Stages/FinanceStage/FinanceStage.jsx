import { Balance } from "../../Balance/Balance";
import * as C from "./styled";
export const FinanceStage = () => {
  return (
    <>
      <C.Container>
        <Balance subject="Extrato financeiro" />
        <C.TableContainer>
          <table className="table table-hover">
            <thead className="table-primary">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Tipo</th>
                <th scope="col">Valor</th>
                <th scope="col">Balanço</th>
                <th scope="col">Data</th>
                <th scope="col">Motivo</th>
              </tr>
            </thead>
            <tbody className="table-hover">
              <tr>
                <th scope="row">1</th>
                <td>Débito</td>
                <td>R$:12,00</td>
                <td>R$ 1.253,88</td>
                <td>12/08/2022 16h35</td>
                <td>
                  <button type="button" class="btn btn-secondary">
                    Pagamento de entrega
                  </button>
                </td>
              </tr>

              <tr>
                <th scope="row">2</th>
                <td>crédito</td>
                <td>R$:62,00</td>
                <td>R$ 1.853,88</td>
                <td>12/08/2022 16h35</td>
                <td>
                  <button type="button" class="btn btn-secondary">
                    Pagamento de entrega
                  </button>
                </td>
              </tr>

              <tr>
                <th scope="row">3</th>
                <td>crédito</td>
                <td>R$:62,00</td>
                <td>R$ 1.853,88</td>
                <td>12/08/2022 16h35</td>
                <td>
                  <button type="button" class="btn btn-secondary">
                    Pagamento de entrega
                  </button>
                </td>
              </tr>

              <tr>
                <th scope="row">4</th>
                <td>crédito</td>
                <td>R$:62,00</td>
                <td>R$ 1.853,88</td>
                <td>12/08/2022 16h35</td>
                <td>
                  <button type="button" class="btn btn-secondary">
                    Pagamento de entrega
                  </button>
                </td>
              </tr>

              <tr>
                <th scope="row">5</th>
                <td>crédito</td>
                <td>R$:62,00</td>
                <td>R$ 1.853,88</td>
                <td>12/08/2022 16h35</td>
                <td>
                  <button type="button" class="btn btn-secondary">
                    Pagamento de entrega
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

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
