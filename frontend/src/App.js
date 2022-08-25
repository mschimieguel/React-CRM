import * as React from "react";

import VerticalTabs from "./components/VerticalTabs";
import SearchAppBar from "./components/SearchAppBar";

function  App() {

    return (
      <div>
        <SearchAppBar />
        <VerticalTabs />
      </div>
    );
  
}

export default App;
