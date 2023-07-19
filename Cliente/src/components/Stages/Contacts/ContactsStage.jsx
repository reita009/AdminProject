import { Balance } from "../../Balance/Balance";
import { useEffect, useState } from "react";
import * as C from "./styled";
import { Api } from "../../../Api";

export const ContactsStage = () => {
  const [users, setUsers] = useState([]);
  const [sessionUser, setSessionUser] = useState([]);

  const getUsers = async () => {
    let json = await Api.getUsers();
    setUsers(json);
  };
  const getSessionUsers = async () => {
    let json = await Api.getSessionUser();
    setSessionUser(json);
  };
  useEffect(() => {
    getUsers();
    getSessionUsers();
  }, []);
  return (
    <>
      <C.Container>
        <Balance subject="Lista de Usuários" name={sessionUser.name} />

        <div className="table-whrap">
          <table className="table table-hover">
            <thead className="table-dark text-light bg-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Valor</th>
                <th scope="col">Tipo</th>
                <th scope="col">Data</th>
                <th scope="col">Motivo</th>
              </tr>
            </thead>
            <tbody className="table-hover">
              {users.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>R$:12,00</td>
                  <td>Débito</td>
                  <td>12/08/2022 16h35</td>
                  <td>
                    <button type="button" class="btn btn-secondary">
                      Pagamento de entrega
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </C.Container>
    </>
  );
};
