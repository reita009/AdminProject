import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as C from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGraduationCap,
  faNewspaper,
  faAddressBook,
  faAward,
  faCoins,
  faGear,
  faArrowRightFromBracket,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import * as Button from "../../components/Buttons/Buttons";
import Logo from "../../assets/logo.png";
import { ContactsStage } from "../../components/Stages/Contacts/ContactsStage";
import { FinanceStage } from "../../components/Stages/FinanceStage/FinanceStage";
import { ManagerStage } from "../../components/Stages/ManagerStage/ManagerStage";
import { NoticeStage } from "../../components/Stages/NoticeStage/NoticeStage";
import { Course } from "../../components/Stages/Course/Course";

export const DashBoard = () => {
  const [email, setEmail] = useState([]);
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState([
    { notice: true },
    { contacts: false },
    { course: false },
    { finance: false },
    { manager: false },
  ]);
  if (!check[0].notice) {
    var activeButtonNotice = "btn btn-outline-success";
  } else {
    var activeButtonNotice = "btn btn-outline-success active";
  }
  if (!check[0].contacts) {
    var activeButtonContacts = "btn btn-outline-success";
  } else {
    var activeButtonContacts = "btn btn-outline-success active";
  }
  if (!check[0].finance) {
    var activeButtonFinance = "btn btn-outline-success";
  } else {
    var activeButtonFinance = "btn btn-outline-success active";
  }
  if (!check[0].course) {
    var activeButtonCourse = "btn btn-outline-success";
  } else {
    var activeButtonCourse = "btn btn-outline-success active";
  }
  if (!check[0].manager) {
    var activeButtonManager = "btn btn-outline-success";
  } else {
    var activeButtonManager = "btn btn-outline-success active";
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
      case "contacts":
        if (check[0].contacts) {
          setCheck([{ contacts: false }]);
        } else {
          setCheck([{ contacts: true }]);
        }
        break;
      case "course":
        if (check[0].course) {
          setCheck([{ course: false }]);
          console.log("ola");
        } else {
          setCheck([{ course: true }]);
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
                className={activeButtonContacts}
                onClick={(e) => handleActiveBtn("contacts")}
                active={check[0].contacts}
              >
                Lista de usuários
              </button>
              <button
                type="button"
                className={activeButtonCourse}
                onClick={(e) => handleActiveBtn("course")}
                active={check[0].course}
              >
                Cursos
              </button>
              <button
                type="button"
                className={activeButtonFinance}
                onClick={(e) => handleActiveBtn("finance")}
                active={check[0].finance}
              >
                Conquistas
              </button>
              <button
                type="button"
                className={activeButtonManager}
                onClick={(e) => handleActiveBtn("manager")}
                active={check[0].manager}
              >
                Configurações
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
              <FontAwesomeIcon id="icon" icon={faNewspaper} />
              <p>Notícias</p>
            </Button.SideBarButton>

            <Button.SideBarButton
              onClick={(e) => handleActiveBtn("contacts")}
              active={check[0].contacts}
            >
              <div className="effectBorder"></div>
              <FontAwesomeIcon id="icon" icon={faAddressBook} />
              <p>Lista de usuários</p>
            </Button.SideBarButton>

            <Button.SideBarButton
              onClick={(e) => handleActiveBtn("course")}
              active={check[0].course}
            >
              <div className="effectBorder"></div>
              <FontAwesomeIcon id="icon" icon={faGraduationCap} />
              <p>Cursos</p>
            </Button.SideBarButton>

            <Button.SideBarButton
              onClick={(e) => handleActiveBtn("finance")}
              active={check[0].finance}
            >
              <div className="effectBorder"></div>
              <FontAwesomeIcon id="icon" icon={faAward} />
              <p>Conquistas</p>
            </Button.SideBarButton>

            <Button.SideBarButton
              onClick={(e) => handleActiveBtn("manager")}
              active={check[0].manager}
            >
              <div className="effectBorder"></div>
              <FontAwesomeIcon id="icon" icon={faGear} />
              <p>Configurações</p>
            </Button.SideBarButton>
          </div>

          <div className="footer-leftArea">
            <div className="exit-area">
              <Link to="/login">
                <button className="btn btn-outline-danger">Sair</button>
              </Link>
            </div>
          </div>
        </C.LeftArea>
        <C.RightArea>
          {check[0].notice && <NoticeStage />}
          {check[0].contacts && <ContactsStage />}
          {check[0].course && <Course />}
          {check[0].finance && <FinanceStage />}
          {check[0].manager && <ManagerStage />}
        </C.RightArea>
      </C.Container>
    </>
  );
};
