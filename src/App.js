import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./components/Private";
import Anon from "./components/Anon";
import AddArticle from "./components/AddArticle";
import ArticleDetails from "./pages/ArticleDetails";
import EditArticle from "./pages/EditArticle";
import Profile from "./pages/Profile";
import UpdateProfile from "./pages/UpdateProfile";
import AddReview from "./components/AddReview";
import Start from "./pages/Start";
/* import BootstrapCarousel from "./components/BootstrapCarousel"; */

import {GlobalStyles} from './components/styled/Global.styled'
/* import 'bootstrap/dist/css/bootstrap.min.css'; */


function App() {
  /* const [isAuthenticated, setIsAuthenticated] = useState(
    () => JSON.parse(localStorage.getItem('auth')) || false
  );
  
  const setAuth = (value) => {
    setIsAuthenticated(value);
    //alert(value);
  };
  
  useEffect(()=>{
    localStorage.setItem("auth", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);
 */
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
     {/*  <BootstrapCarousel /> */}
      <Routes>
      {/* <Route
          path="/"
          element={isAuthenticated
            ? <HomePage  />
            : <Navigate to="/start" replace />
          }
        /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/start" element={<Start />} />
        <Route path="/articles/:id" element={<ArticleDetails />} />
        <Route path="/articles/edit/:id" element={<EditArticle />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/profile-edit/:id" element={<UpdateProfile />} />
        <Route path="/review/create/:id" element={<AddReview />} />
        <Route
          path="/signup"
          element={
            <Anon>
              <Signup />
            </Anon>
          }
        />
        <Route
          path="/login"
          element={
            <Anon>
              <Login />
            </Anon>
          }
        />

        <Route path="/addarticle" element={<AddArticle />} />
      </Routes>
    </div>
  );
}

export default App;
