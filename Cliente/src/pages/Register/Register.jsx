import { Link } from "react-router-dom";
import * as C from "./styled";
import * as Buttons from "../../components/Buttons/Buttons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useState, useEffect } from "react";

const validationUser = yup.object().shape({
  email: yup.string().required("Preencha o campo do email."),
  password: yup.string().required("Preencha o campo da senha."),
});
export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationUser),
  });

  const userLogin = (data) => {
    const response = axios
      .post("http://localhost:8081/users/create", data)
      .then((element) => {
        console.log("Deu tudo Certo!");
        if (element.status == 200) {
          setShowSucess(true);
          setShowDanger(false);
        }
      })
      .catch((e) => {
        if (e.request.status == 500) {
          console.log(e.request.responseText);
          setShowDanger(true);
          setShowSucess(false);
        }
      });
  };

  /* useEffect(() => {
    axios.get("http://localhost:8081/").then((data) => {
      console.log(data.data);
    });
  }, []);*/
  const [showSuccess, setShowSucess] = useState(false);
  const [showDanger, setShowDanger] = useState(false);
  return (
    <>
      <C.Container>
        <C.LeftArea>
          <C.HeaderLeftArea>Logo</C.HeaderLeftArea>
          <C.FormRegister method="POST" onSubmit={handleSubmit(userLogin)}>
            <C.HeaderForm>
              <h1>Cadastro</h1>
            </C.HeaderForm>
            {showSuccess && (
              <div className="alert alert-success" role="alert">
                Cadastro concluido!
              </div>
            )}
            {showDanger && (
              <div className="alert alert-danger" role="alert">
                email ja existente!
              </div>
            )}
            {errors.email && (
              <div className="alert alert-warning">{errors.email?.message}</div>
            )}
            {errors.password && (
              <div className="alert alert-warning">
                {errors.password?.message}
              </div>
            )}

            <C.InputArea>
              <label>E-mail</label>
              <C.Input
                className="form-control"
                type="email"
                placeholder="Digite seu email"
                name="email"
                {...register("email")}
              />
            </C.InputArea>
            <C.InputArea>
              <label>Senha</label>
              <C.Input
                className="form-control"
                type="password"
                placeholder="Digite sua senha"
                name="password"
                {...register("password")}
              />
            </C.InputArea>
            <Buttons.DefaultButton className="button" type="submit">
              Cadastrar
            </Buttons.DefaultButton>

            <Link to="/login">
              <span className="badge text-bg-primary back">Voltar?</span>
            </Link>
          </C.FormRegister>
        </C.LeftArea>
        <C.RightArea>
          <C.BgEffect></C.BgEffect>
        </C.RightArea>
      </C.Container>
    </>
  );
};
