import { Balance } from "../../Balance/Balance";
import { useState, useEffect } from "react";
import { Api } from "../../../Api";
export const ManagerStage = () => {
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
      <Balance subject="Gerencia de Dados" name={users.name} />
      ola
    </>
  );
};
