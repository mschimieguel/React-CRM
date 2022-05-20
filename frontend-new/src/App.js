import * as React from 'react';

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import VerticalTabs from './components/VerticalTabs';
import SearchAppBar from './components/SearchAppBar';

import Home from './pages/Home';
import Overview from './pages/Overview'; 

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
            <VerticalTabs /> {/* menu vertical - opções de navegação */}

          </div>

        </Router>


  );
}


export default App;
