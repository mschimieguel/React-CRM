import * as React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import VerticalTabs from "./components/VerticalTabs";
import SearchAppBar from "./components/SearchAppBar";

import Home from "./pages/Home";
import Overview from "./pages/Overview";

const Leads = [
  {
    id: 1,
    nome: "Darth Vader",
    email: "darthvader@imperio.com",
    telefone: "99999-9999",
    tipo: "Pessoa",
    etapa: "Final",
    data: new Date(2019, 1, 2),
    dataFinal: new Date(2022, 12, 12),
  },
  {
    id: 2,
    nome: "Luke Skywalker",
    email: "lukegostosao@aliancarebelde.com",
    telefone: "1111-1111",
    tipo: "Pessoa",
    etapa: "Avancado",
    data: new Date(2019, 1, 2),
    dataFinal: new Date(2022, 12, 12),
  },
  {
    id: 3,
    nome: "Leia Skywalker",
    email: "adorowookies@aliancarebelde.com",
    telefone: "2222-2222",
    tipo: "Pessoa",
    etapa: "Inicial",
    data: new Date(2019, 1, 2),
    dataFinal: new Date(2022, 12, 12),
  },
];

function App() {
  return (
    <Router>
      <div>
        {/* <Link to='/'>Home</Link>
            <Link to='/Overview'>Overview</Link> 
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/Overview' element={<Overview />} />
              </Routes> */}
        <SearchAppBar /> {/* menu horizontal superior */}
        <VerticalTabs leads={Leads} /> {/* menu vertical - opções de navegação */}
      </div>
    </Router>
  );
}

export default App;
