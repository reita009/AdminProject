import { Link, useNavigate } from "react-router-dom";
import * as C from "./styled";
import * as Buttons from "../../components/Buttons/Buttons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useState, useEffect } from "react";
import Roket from "../../assets/Rocket.gif";
import Boat from "../../assets/boat.gif";
import { Welcome } from "../../components/Welcome/Welcome";

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
          <Welcome />
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

            <img src={Boat} alt="" />
            <C.TitleArea>
              <h1>LOGIN</h1>
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

            <Buttons.DefaultButton>Entrar</Buttons.DefaultButton>
            <C.HelpArea>
              <p>
                Precisa de ajuda? <span>Fala conosco</span>
              </p>
            </C.HelpArea>
            <Link to="/register">
              <span className="badge text-bg-success">Cadastre-se</span>
            </Link>
          </C.BodyLeftArea>
        </C.LeftArea>
        <C.RightArea>
          <div className="right-title">
            <h1>Faça Login</h1>
            <h1>E entre para nosso time</h1>
          </div>
          <img src={Roket} alt="" />
        </C.RightArea>
      </C.Container>
    </>
  );
};
