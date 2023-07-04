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
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Colors from "../../components/colors/colors";
import * as Button from "../../components/Buttons/Buttons";

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
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      {!loading && email.length == 0 && (
        <div className="alert alert-warning" role="alert">
          <div className="alert alert-warning" role="alert">
            Erro de conexão com servidor!.. tente mais tarde
          </div>
        </div>
      )}

      <C.Container>
        <C.LeftArea>
          <div className="header-leftArea">
            <h1>Logo</h1>
          </div>
          <div className="body-leftArea">
            <Button.SideBarButton>
              <div className="effectBorder"></div>
              <FontAwesomeIcon id="icon" icon={faMessage} />
              <p>Notícias</p>
            </Button.SideBarButton>

            <Button.SideBarButton>
              <div className="effectBorder"></div>
              <FontAwesomeIcon id="icon" icon={faChartLine} />
              <p>DashBoard</p>
            </Button.SideBarButton>

            <Button.SideBarButton>
              <div className="effectBorder"></div>
              <FontAwesomeIcon id="icon" icon={faTruckFast} />
              <p>Pedidos</p>
            </Button.SideBarButton>

            <Button.SideBarButton>
              <div className="effectBorder"></div>
              <FontAwesomeIcon id="icon" icon={faCoins} />
              <p>Extrato financeiro</p>
            </Button.SideBarButton>

            <Button.SideBarButton>
              <div className="effectBorder"></div>
              <FontAwesomeIcon id="icon" icon={faGear} />
              <p>Gerenciar dados</p>
            </Button.SideBarButton>
          </div>

          <div className="footer-leftArea">
            <div className="exit-area">
              <FontAwesomeIcon id="exit-icon" icon={faArrowRightFromBracket} />
              <p>Sair</p>
            </div>
          </div>
        </C.LeftArea>
      </C.Container>
    </>
  );
};
