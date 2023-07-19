import * as C from "./styled";
import { Balance } from "../../Balance/Balance";
import { useState, useEffect } from "react";
import { Api } from "../../../Api";
import { CardCourse } from "../../CardCourse/CardCourse";
import BgJs from "../../../assets/JavaScriptLogo.jpg";
import BGReactJS from "../../../assets/ReactJS.png";
import BGNodeJs from "../../../assets/BgNodeJs.jpg";
import BGHtml from "../../../assets/BgHtml.jpg";
import BGCss from "../../../assets/BgCss.png";
import BGAngular from "../../../assets/BgAngular.jpg";
import BGPhp from "../../../assets/BgPhp.png";
import BGMysql from "../../../assets/BgMysql.jpg";
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

        <div className="cards-group">
          <CardCourse img={BgJs} title="Curso completo de JavaScript" />
          <CardCourse img={BGReactJS} title="React-JS Avançado" />
          <CardCourse img={BGNodeJs} title="Dominando Node-JS" />
          <CardCourse img={BGHtml} title="Html Iniciante" />
          <CardCourse img={BGCss} title="Css Iniciante" />
          <CardCourse img={BGAngular} title="Angular Avançado" />
          <CardCourse img={BGPhp} title="O poder do PHP" />
          <CardCourse img={BGMysql} title="Dominando banco de dados" />
        </div>
      </C.Container>
    </>
  );
};
