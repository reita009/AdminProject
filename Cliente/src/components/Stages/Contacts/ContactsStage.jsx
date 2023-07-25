import { Balance } from "../../Balance/Balance";
import { useEffect, useState } from "react";
import * as C from "./styled";
import { Api } from "../../../Api";
import { number } from "yup";

export const ContactsStage = () => {
  const [users, setUsers] = useState([]);
  const [sessionUser, setSessionUser] = useState([]);
  const [finance, setFinance] = useState([]);
  const [balance, setBalance] = useState([]);

  const getUsers = async () => {
    let json = await Api.getUsers();
    setUsers(json);
  };
  const getSessionUsers = async () => {
    let json = await Api.getSessionUser();
    setSessionUser(json);
  };
  const getFinances = async () => {
    let json = await Api.geFinance();
    setFinance(json.finance);
  };
  const getBalance = async () => {
    let json = await Api.getbalance();
    setBalance(json);
  };
  useEffect(() => {
    getSessionUsers();
  }, []);
  return (
    <>
      <C.Container>
        <Balance subject="Lista de Usuários" name={sessionUser.name} />

        <div className="table-whrap"></div>
      </C.Container>
    </>
  );
};
