import React from 'react';
import './App.css';


import PageNotFound from "./containers/PageNotDefault";



import { routesHome, routesAdmin } from "./routes";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import HomeTemplate from "./templates/HomeTemplate";
import AdminTemplate from "./templates/AdminTemplate";
import AuthHome from "./components/Auth";
import SignUp from "../src/components/SignUp";

function App() {


  const showMenuHome = (routes) => {
    // kt routes tồn tại và routes.length>0
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplate key={index} exact={item.exact} path={item.path} Component={item.component} />
        )
      })
    }
  }

  const showMenuAdmin = (routes) => {
    // kt routes tồn tại và routes.length>0
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <AdminTemplate key={index} exact={item.exact} path={item.path} Component={item.component} />
        )
      })
    }
  }

  return (
    <BrowserRouter>
      <Switch>
        {showMenuHome(routesHome)}
        {showMenuAdmin(routesAdmin)}
        {/* <Route exact={false} path="/auth" component={Auth} /> */}
        <Route exact={false} path="/sign-up" component={SignUp} />
        <Route exact={false} path="/auth-home" component={AuthHome} />


        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
