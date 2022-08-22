import * as React from "react";

import {Component} from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import VerticalTabs from "./components/VerticalTabs";
import SearchAppBar from "./components/SearchAppBar";

import Calendar from "./pages/Calendar";
import Overview from "./pages/Overview";

const OldLeads = [
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

 class App extends Component {
      
      state = {
        leads: []
      }
      componentDidMount() {
        fetch("http://127.0.0.1:7776/lead")
        .then(res => res.json())
        .then((data) => {
          this.setState({ leads: data })
        })
        .catch(console.log)
      }
      render() {
        return (
         
            <div>
              
              {/* <Link to='/'>Home</Link>
                  <Link to='/Overview'>Overview</Link> 
                    <Routes>
                      <Route exact path='/' element={<Home />} />
                      <Route exact path='/Overview' element={<Overview />} />
                    </Routes> */}
              <SearchAppBar /> {/* menu horizontal superior */}

              <VerticalTabs leads={this.state.leads}  /> {/* menu vertical - opções de navegação */}
              {/*<Leads leads={this.state.leads} />*/} 
             
            </div>
         
        )
      }
 }

export default App;
