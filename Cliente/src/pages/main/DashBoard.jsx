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
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import Colors from "../../components/colors/colors";
import * as Button from "../../components/Buttons/Buttons";
import Logo from "../../assets/logo.png";
import { DashBoardStage } from "../../components/Stages/DashBoardStage/DashBoardStage";
import { FinanceStage } from "../../components/Stages/FinanceStage/FinanceStage";
import { ManagerStage } from "../../components/Stages/ManagerStage/ManagerStage";
import { NoticeStage } from "../../components/Stages/NoticeStage/NoticeStage";

export const DashBoard = () => {
  const [email, setEmail] = useState([]);
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState([
    { notice: true },
    { dashboard: false },
    { requests: false },
    { finance: false },
    { manager: false },
  ]);
  if (!check[0].notice) {
    var activeButtonNotice = "btn btn-outline-light";
  } else {
    var activeButtonNotice = "btn btn-outline-light active";
  }
  if (!check[0].dashboard) {
    var activeButtonDashBoard = "btn btn-outline-light";
  } else {
    var activeButtonDashBoard = "btn btn-outline-light active";
  }
  if (!check[0].finance) {
    var activeButtonFinance = "btn btn-outline-light";
  } else {
    var activeButtonFinance = "btn btn-outline-light active";
  }
  if (!check[0].requests) {
    var activeButtonRequest = "btn btn-outline-light";
  } else {
    var activeButtonRequest = "btn btn-outline-light active";
  }
  if (!check[0].manager) {
    var activeButtonManager = "btn btn-outline-light";
  } else {
    var activeButtonManager = "btn btn-outline-light active";
  }
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  const handleActiveBtn = (e) => {
    switch (e) {
      case "notice":
        if (check[0].notice) {
          setCheck([{ notice: false }]);
        } else {
          setCheck([{ notice: true }]);
        }
        break;
      case "dashboard":
        if (check[0].dashboard) {
          setCheck([{ dashboard: false }]);
        } else {
          setCheck([{ dashboard: true }]);
        }
        break;
      case "requests":
        if (check[0].requests) {
          setCheck([{ requests: false }]);
          console.log("ola");
        } else {
          setCheck([{ requests: true }]);
        }
        break;
      case "finance":
        if (check[0].finance) {
          setCheck([{ finance: false }]);
        } else {
          setCheck([{ finance: true }]);
        }
        break;
      case "manager":
        if (check[0].manager) {
          setCheck([{ manager: false }]);
        } else {
          setCheck([{ manager: true }]);
        }
        break;
    }
  };
  const handleShowMenuMobile = () => {
    if (showMenuMobile) {
      setShowMenuMobile(false);
    } else {
      setShowMenuMobile(true);
    }
  };

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
        <C.LeftAreaMobile>
          <FontAwesomeIcon
            icon={faBars}
            className="icon"
            onClick={handleShowMenuMobile}
          />
          {showMenuMobile && (
            <div className="btn-mobile-group">
              <button
                type="button"
                className={activeButtonNotice}
                onClick={(e) => handleActiveBtn("notice")}
              >
                Notícias
              </button>
              <button
                type="button"
                className={activeButtonDashBoard}
                onClick={(e) => handleActiveBtn("dashboard")}
                active={check[0].dashboard}
              >
                DashBoard
              </button>
              <button
                type="button"
                className={activeButtonRequest}
                onClick={(e) => handleActiveBtn("requests")}
                active={check[0].requests}
              >
                Pedidos
              </button>
              <button
                type="button"
                className={activeButtonFinance}
                onClick={(e) => handleActiveBtn("finance")}
                active={check[0].finance}
              >
                Extrato financeiro
              </button>
              <button
                type="button"
                className={activeButtonManager}
                onClick={(e) => handleActiveBtn("manager")}
                active={check[0].manager}
              >
                Gerenciar Dados
              </button>
            </div>
          )}
        </C.LeftAreaMobile>

        <C.LeftArea>
          <div className="header-leftArea">
            <img src={Logo} alt="" />
          </div>
          <div className="body-leftArea">
            <Button.SideBarButton
              onClick={(e) => handleActiveBtn("notice")}
              active={check[0].notice}
            >
              <div className="effectBorder"></div>
              <FontAwesomeIcon id="icon" icon={faMessage} />
              <p>Notícias</p>
            </Button.SideBarButton>

            <Button.SideBarButton
              onClick={(e) => handleActiveBtn("dashboard")}
              active={check[0].dashboard}
            >
              <div className="effectBorder"></div>
              <FontAwesomeIcon id="icon" icon={faChartLine} />
              <p>DashBoard</p>
            </Button.SideBarButton>

            <Button.SideBarButton
              onClick={(e) => handleActiveBtn("requests")}
              active={check[0].requests}
            >
              <div className="effectBorder"></div>
              <FontAwesomeIcon id="icon" icon={faTruckFast} />
              <p>Pedidos</p>
            </Button.SideBarButton>

            <Button.SideBarButton
              onClick={(e) => handleActiveBtn("finance")}
              active={check[0].finance}
            >
              <div className="effectBorder"></div>
              <FontAwesomeIcon id="icon" icon={faCoins} />
              <p>Extrato financeiro</p>
            </Button.SideBarButton>

            <Button.SideBarButton
              onClick={(e) => handleActiveBtn("manager")}
              active={check[0].manager}
            >
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
        <C.RightArea>
          {check[0].notice && <NoticeStage />}
          {check[0].dashboard && <DashBoardStage />}
          {check[0].finance && <FinanceStage />}
          {check[0].manager && <ManagerStage />}
        </C.RightArea>
      </C.Container>
    </>
  );
};
