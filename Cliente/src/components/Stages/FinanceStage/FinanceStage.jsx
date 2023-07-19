import { Balance } from "../../Balance/Balance";
import * as C from "./styled";
import axios from "axios";
import { useState, useEffect } from "react";

export const FinanceStage = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      let response = await axios.get("http://localhost:8081/login");

      setUsers(response.data);
    } catch (e) {}
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
