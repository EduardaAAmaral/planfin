import React from "react";
import "./styles.css";
import imagem from "./figura 1.jpg";
import Figura from "./imgem.png";
import Grafico from "./grafico_colunas.png"
import pizza from "./grafico_pizza.png";

const entrada = () => {
    return (
      <div className="coluna">
        <div className="principal">
          <div className="que_somos">
            <p className="somos">Quem Somos</p>
            <p className="texto">O FinPlan+ é um programa de aconselhamento financeiro pessoal que utiliza <br></br>programação linear 
              para otimizar gastos e investimentos, proporcionando uma abordagem personalizada às finanças individuais. 
              Para obter um resultado útil, é necessário fornecer informações detalhadas, incluindo renda mensal, 
              despesas fixas, variáveis, dívidas, objetivos financeiros, tolerância ao risco e outras restrições específicas.</p>
            <p className="texto">Por meio de gráficos de pizzas apresentamos uma posição solução para o problema do cliente. 
            O gráfico de pizza oferece uma representação visual clara das percentagens de cada categoria em relação ao total. 
            Cada fatia corresponde a uma porcentagem do conjunto, facilitando a compreensão das contribuições individuais.</p>
          </div>
          <div className="imagem">
            <img src={imagem} alt="imagem"className="img"/>
          </div>
        </div>
        <div className="graficos">
          <div className="caixas"> <img src={Figura} alt="figura"/></div>
          <div className="caixas"> Gráfico
          <img src={Grafico} alt="gafico" className="ima"/>
          </div>
          <div className="caixas"> Gráfico de Pizza
          <img src={pizza} alt="gafico" className="ima"/>
          </div>
        </div>
      </div>
      
  );
};
     
  

export default entrada;