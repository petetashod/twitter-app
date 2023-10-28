/** @format */

import "./App.css";
import NavBar from "./clientend/NavBar.jsx";
import Search from "./clientend/Search";
import FavTweets from "./clientend/FavTweets";
import Home from "./clientend/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/FavTweets" element={<FavTweets />} />
      </Routes>
    </>
  );
}

export default App;
