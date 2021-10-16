import React from "react";
import Router from "./router/router";
// import Navbar from "./Components/navBar/navBar";
// import ItemListContainer from "./pages/itemListContainer";
import "./Css/App.css";

class App extends React.Component {
  render() {
    return (
      <div className="grilla">
        <Router />
      </div>
    );
  }
}

export default App;
