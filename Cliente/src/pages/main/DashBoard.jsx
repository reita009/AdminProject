import axios from "axios";
import { useState, useEffect } from "react";
import * as C from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faChartLine,
  faTruckFast,
  faCoins,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import Colors from "../../components/colors/colors";

export const DashBoard = () => {
  const [email, setEmail] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getEmail();
  }, []);
  const getEmail = async () => {
    try {
      setLoading(true);
      /*let response = await fetch("http://localhost:8081/admin/users");
      let json = await response.json();*/
      let response = await axios.get("http://localhost:8081/admin/users");
      response.data;
      setLoading(false);
      setEmail(response.data.users);
    } catch (e) {
      setLoading(false);
    }
  };
  /*
    {email.map((item, index) => (
        <div key={index}>
          <p>{item.email}</p>
        </div>
      ))}*/
  return (
    <>
      {loading && (
        <div class="spinner-border text-info" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}

      {!loading && email.length == 0 && (
        <div class="alert alert-warning" role="alert">
          <div class="alert alert-warning" role="alert">
            Erro de conexão com servidor!.. tente mais tarde
          </div>
        </div>
      )}

      <C.Container>
        <C.LeftArea>
          <div className="header-leftArea">
            <h1>Logo</h1>
          </div>
        </C.LeftArea>
      </C.Container>
    </>
  );
};
