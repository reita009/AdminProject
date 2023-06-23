import { Link } from "react-router-dom";
import * as C from "./styled";
import * as Buttons from "../../components/Buttons/Buttons";

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

            <C.InputArea>
              <label>Senha</label>
              <C.Input type="text" placeholder="Digite sua senha" />
            </C.InputArea>
            <C.ForgotPasswordArea>
              <input type="checkbox" />
              <p>Lembre-me</p>
              <Link className="link">Esqueci minha senha</Link>
            </C.ForgotPasswordArea>
            <C.TermsOfUse>
              <p>Ao acessar nosso sistema você concorda com nossos</p>
              <Link className="link">Termos de Uso.</Link>
            </C.TermsOfUse>
            <Buttons.DefaultButton>Entrar</Buttons.DefaultButton>
            <C.HelpArea>
              <p>
                Precisa de ajuda? <span>Fala conosco</span>
              </p>
            </C.HelpArea>
          </C.BodyLeftArea>
        </C.LeftArea>
        <C.RightArea>
          <C.BgEffect></C.BgEffect>
        </C.RightArea>
      </C.Container>
    </>
  );
};
