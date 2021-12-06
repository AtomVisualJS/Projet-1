import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

import  {UsersDispatch}  from "./Redux/dispatch/usersDispatch"
import { ProductsDispatch } from "./Redux/dispatch/productsDispatch";
import ResponsiveAppBar from "./app/Header";

function App() {
  console.log(navigator.userAgent);
  return (
    <div className="App">
      <UsersDispatch />
      <ProductsDispatch />
      <ResponsiveAppBar />
      <br/>
      <br/>
    </div>
  );
}

export default App;
