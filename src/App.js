import React from "react";
import "./App.css";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <SideBar />
        {/* Feed */}
        {/* widgets */}
      </div>
    </div>
  );
}

export default App;
