import * as React from 'react';
import {BrowserRouter as Container, Routes, Route, Link} from 'react-router-dom'
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
    <Container>
    <Routes>
      
        <Route exact path="./pages/">
          <Home />
        </Route>
        
        <Route exact path="./pages/Overview">
          <Overview />
        </Route>

    </Routes>
    </Container>


  );
}


export default App;
