import * as React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import BasicModal from './components/BasicModal';
import BasicList from './components/BasicList';
import BasicGrid from './components/BasicGrid';
import MediaCard from './components/MediaCard';


function App() {
  return (
    <Router>
  
    <BasicGrid />
    <BasicGrid />

    {/* <BasicModal />
    <BasicList /> */}

    



    </Router>
    

  );
}


export default App;
