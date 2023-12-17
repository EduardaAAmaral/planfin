import React, { useState } from "react";
import Input from "../../componentes/input";
import Button from "../../componentes/button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
  
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
  
    const handleLogin = () => {
      if (!email | !senha) {
        setError("Preencha todos os campos");
        return;
      }
  
      const res = login(email, senha);
  
      if (res) {
        setError(res);
        return;
      }
  
      navigate("/Formulario");
    };

  return (
    <C.Container>
      <C.Content>
      <C.Label>LOGIN</C.Label>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Entrar" onClick={handleLogin} />
        <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/cadastro">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
};

export default Login;