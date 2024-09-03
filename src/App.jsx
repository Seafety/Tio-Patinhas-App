import React from "react";
import AppRoutes from "./Routes";
import "./styles/_global.scss";
import AppTemplate from "./components/templates/AppTemplate";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <body>
      <BrowserRouter>
        <AppTemplate>
          <AppRoutes />
        </AppTemplate>
      </BrowserRouter>
    </body>
  );
};

export default App;
