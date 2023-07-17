import { Balance } from "../../Balance/Balance";
import { useState, useEffect } from "react";
import axios from "axios";

export const ManagerStage = () => {
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
  console.log(users);
  return (
    <>
      <Balance subject="Gerencia de Dados" name={users.name} />
      <button onClick={getUsers}>click</button>
      ola
    </>
  );
};
