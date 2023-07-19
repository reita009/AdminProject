import { Balance } from "../../Balance/Balance";
import * as C from "./styled";
import { useState, useEffect } from "react";
import { Api } from "../../../Api";

export const FinanceStage = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    let json = await Api.getSessionUser();
    setUsers(json);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <C.Container>
        <Balance subject="Conquistas" name={users.name} />
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
