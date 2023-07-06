import { Link, useNavigate } from "react-router-dom";
import * as C from "./styled";
import * as Buttons from "../../components/Buttons/Buttons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useState, useEffect } from "react";
import Logo from "../../assets/logo.png";

const validationUser = yup.object().shape({
  email: yup.string().required("Email obrigatório."),
  password: yup.string().required("Senha obrigatória"),
});
export const Login = () => {
  const [showAlert, setShowAlert] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationUser),
  });
  const navigate = useNavigate();
  const locationState = {
    state: { auth: true },
  };

  const userLogin = (data) => {
    const response = axios
      .post("http://localhost:8081/authenticate", data)
      .then((response) => {
        if (response.status == 200) {
          navigate("/dashboard", locationState);
        }
      })
      .catch((e) => {
        setShowAlert(true);
        console.log("Deu errado!");
      });
  };

  /* useEffect(() => {
    axios.get("http://localhost:8081/").then((data) => {
      console.log(data.data);
    });
  }, []);*/

  return (
    <>
      <C.Container>
        <C.LeftArea>
          <C.HeaderLeftArea>
            <img src={Logo} />
          </C.HeaderLeftArea>
          <C.BodyLeftArea method="POST" onSubmit={handleSubmit(userLogin)}>
            {errors.email && (
              <div className="alert alert-warning" role="alert">
                {errors.email?.message}
              </div>
            )}
            {errors.password && (
              <div className="alert alert-warning" role="alert">
                {errors.password?.message}
              </div>
            )}
            {showAlert && (
              <div className="alert alert-danger" role="alert">
                Email.. ou Senha invalida!
              </div>
            )}
            <C.TitleArea>
              <h1>Olá!</h1>
              <p>Insira suas credenciais para fazer o seu login</p>
            </C.TitleArea>
            <C.InputArea>
              <label>E-mail</label>
              <C.Input
                className="form-control"
                type="email"
                placeholder="Digite seu email"
                {...register("email")}
                name="email"
              />
            </C.InputArea>

            <C.InputArea>
              <label>Senha</label>
              <C.Input
                className="form-control"
                type="password"
                placeholder="Digite sua senha"
                {...register("password")}
                name="password"
              />
              <p>{errors.password?.message}</p>
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
            <Link to="/register">
              <span className="badge text-bg-primary">Cadastre-se</span>
            </Link>
          </C.BodyLeftArea>
        </C.LeftArea>
        <C.RightArea>
          <C.BgEffect></C.BgEffect>
        </C.RightArea>
      </C.Container>
    </>
  );
};
