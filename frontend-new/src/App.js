import * as React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
/* 
import BasicModal from './components/BasicModal';
import BasicList from './components/BasicList';
import MediaCard from './components/MediaCard';
import BasicGrid from './components/BasicGrid';
 */

import Home from './pages/Home';
import Overview from './pages/Overview';

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/overview">Overview</Link>
        </li>
      </ul>

{/*         <Route exact path="./pages/">
          <Home />
        </Route>

        <Route exact path="./pages/Overview">
          <Overview />
        </Route> */}



    </Router>
    

  );
}


export default App;
