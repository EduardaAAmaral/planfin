// App.js
import React, { useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const [renda, setRenda] = useState("");
  const [gf, setGF] = useState("");
  const [gv, setGV] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const preencheu = () => {
    console.log("Botão clicado!");
    if (!renda || !gf || !gv) {
      setError("Preencha todos os campos");
      return;
    }

    console.log("Redirecionando para /home");
    navigate("/home");
  };

  return (
    <div className="container">
      <div className="formulario">
        <p className="gastos">Formulário de Gastos</p>
        <label>Renda Mensal</label>
        <input
          type="text"
          placeholder="Digite sua renda"
          value={renda}
          onChange={(e) => { setRenda(e.target.value); setError(""); }}
        />
        <label>Gastos Fixos</label>
        <input
          type="text"
          placeholder="Digite seus gastos fixos"
          value={gf}
          onChange={(e) => { setGF(e.target.value); setError(""); }}
        />
        <label>Gastos Variáveis</label>
        <input
          type="text"
          placeholder="Digite seus gastos variáveis"
          value={gv}
          onChange={(e) => { setGV(e.target.value); setError(""); }}
        />
        <label>{error}</label>
        <button type="button" onClick={preencheu} className='botao'>
          Registrar
        </button>
      </div>
    </div>
  );
};

export default App;
