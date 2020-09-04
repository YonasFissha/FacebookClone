import React from "react";
import "./App.css";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import Feed from "./Components/Feed";
import Widget from "./Components/Widget";
function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <SideBar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}

export default App;
