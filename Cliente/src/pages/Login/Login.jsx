import { Link } from "react-router-dom";
import * as C from "./styled";

export const Login = () => {
  return (
    <>
      <C.Container>
        <C.LeftArea>
          <C.HeaderLeftArea>Logo</C.HeaderLeftArea>
          <C.BodyLeftArea>
            <C.TitleArea>
              <h1>Olá!</h1>
              <p>Insira suas credenciais para fazer o seu login</p>
            </C.TitleArea>
            <C.InputArea>
              <label>E-mail</label>
              <C.Input type="text" placeholder="Digite seu email" />
            </C.InputArea>
          </C.BodyLeftArea>
        </C.LeftArea>
      </C.Container>
    </>
  );
};
