import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/index";
import Login from "../pages/login";
import Cadastro from "../pages/cadastro";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import Principal from "../pages/pagina principal";
import Formulario from "../pages/home/formulario"



/*const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <login />;
};*/

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Header/>
        <Routes>
          <Route path="/" element={<Principal/>}/>
          <Route path="/home" element={<Home/>} />
          <Route path="/formulario" element ={<Formulario/>}/>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/cadastro" element={<Cadastro />} />
          <Route path="*" element={<Login />} />

        </Routes>
        <Footer/>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;