import "modules/bootstrap/dist/css/bootstrap.min.css";
import "modules/font-awesome/css/font-awesome.min.css";

import React from "react";
import Routers from "./routes";
import Menu from "../tempate/menu";

export default props => (
  <div className="container">
    <Menu />
    <Routers />
  </div>
);
