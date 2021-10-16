import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import NavBar from "../Components/navBar/navBar";
import ItemListContainer from "../pages/itemListContainer";
// import ItemDetailContainer from '../pages/itemDetailContainer/itemDetailContainer';

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/category/:categoryId" component={ItemListContainer} />
        {/* <Route path="/item/:id" component={ItemDetailContainer}/> */}
        <Route path="*" component={NavBar} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
