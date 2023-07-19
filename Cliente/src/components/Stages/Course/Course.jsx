import * as C from "./styled";
import { Balance } from "../../Balance/Balance";
import { useState, useEffect } from "react";
import { Api } from "../../../Api";

export const Course = () => {
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
        <Balance subject="Cursos" name={users.name} />
      </C.Container>
    </>
  );
};
