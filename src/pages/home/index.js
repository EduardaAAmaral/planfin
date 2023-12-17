import React from 'react';
import "./index.css";
import img from "./grafico_pizza_compressed.png";
import pessoa from "./th.jpg"


const Home = () => {


  return (
    <>
    <contener>
        <div className='barra_encima'>
            <div>
                <img src={pessoa} alt="Imagem" className='pessoa'/>
            </div>
            <div>
                <p className='nome'>Nome da pessoa</p>
                <p className='re'>Renda da Mensal</p>
            </div>
        </div>
        <div className='mostrar'>
            <div className='lado_esquerdo'>
                <div className='renda_mensal'>
                    <p className='renda'>Gastos Fixos</p>
                    <br></br>
                    <label>Aluguel</label>
                    <input type="range" min="-10" max="5" />
                    <label>Luz</label>
                    <input type="range" min="-10" max="5" />
                    <label>Água</label>
                    <input type="range" min="-10" max="5" />
                </div>
                <div className='possibilidades'>
                    <p className='renda'> Gastos Váriavies</p>
                    <br></br>
                    <label>Entreterimento</label>
                    <input type="range" min="-10" max="5" />
                    <label>Transporte</label>
                    <input type="range" min="-10" max="5" />
                    <label>Lazer</label>
                    <input type="range" min="-10" max="5" />
                    <label>Investimento</label>
                    <input type="range" min="-10" max="5" />
                </div>
            </div>
            <div className='lado_direito'>
                <p className='renda'>Gráficos das Possibilidades</p>
                <img src ={img} alt ="grafico" className='img'/>
            </div>
        </div>
    </contener>
    
    </>
  );
};

export default Home;