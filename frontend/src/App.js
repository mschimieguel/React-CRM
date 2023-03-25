import * as React from "react";

import VerticalTabs from "./nav/VerticalTabs";
import SearchAppBar from "./nav/SearchAppBar";

function  App() {

    return (
      <div>
        <SearchAppBar />
        <VerticalTabs />
      </div>
    );
  
}

export default App;
