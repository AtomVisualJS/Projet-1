import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

import  {UsersDispatch}  from "./Redux/dispatch/usersDispatch"

import ResponsiveAppBar from "./app/Header";
import DataDispatch from "./Redux/dispatch/dataDispatch";

function App() {
  return (
    <div className="App">
      <UsersDispatch />
      <DataDispatch />
      <ResponsiveAppBar />
      <br/>
      <br/>
    </div>
  );
}

export default App;
