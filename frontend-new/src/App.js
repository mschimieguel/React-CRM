import * as React from "react";

import {Component} from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import VerticalTabs from "./components/VerticalTabs";
import SearchAppBar from "./components/SearchAppBar";

import Home from "./pages/Home";
import Overview from "./pages/Overview";



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
          <Router>
            <div>
              
              {/* <Link to='/'>Home</Link>
                  <Link to='/Overview'>Overview</Link> 
                    <Routes>
                      <Route exact path='/' element={<Home />} />
                      <Route exact path='/Overview' element={<Overview />} />
                    </Routes> */}
              <SearchAppBar /> {/* menu horizontal superior */}

              <VerticalTabs leads={this.state.leads} /> {/* menu vertical - opções de navegação */}
              {/*<Leads leads={this.state.leads} />*/} 
            </div>
          </Router>
        )
      }
 }

export default App;
