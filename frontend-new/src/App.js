import * as React from 'react';

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import IconLabelTabs from './components/IconLabelTabs';
import VerticalTabs from './components/VerticalTabs';
import SearchAppBar from './components/SearchAppBar';

/* 
import BasicModal from './components/BasicModal';
import BasicList from './components/BasicList';
import MediaCard from './components/MediaCard';
import BasicGrid from './components/BasicGrid';
 */

/* import Home from './pages/Home';
import Overview from './pages/Overview'; */

function App() {
  return (
        <Router>

          <div> 

            {/* <Link to='/'>Home</Link>
            <Link to='/Overview'>Overview</Link> */}


            <SearchAppBar /> {/* menu horizontal superior */}
            <VerticalTabs /> {/* menu vertical - opções de navegação */}

          </div>

        {/*   <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/Overview' element={<Overview />} />
          </Routes>
        */}
        </Router>


  );
}


export default App;
