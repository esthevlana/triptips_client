import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./components/Private";
import Anon from "./components/Anon";
import Footer from "./components/Footer";
import AddArticle from "./components/AddArticle";
import ArticleDetails from "./pages/ArticleDetails";
import EditArticle from "./pages/EditArticle";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles/:id" element={<ArticleDetails />} />
        <Route path="/articles/edit/:id" element={<EditArticle />} />
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

      <Footer />
    </div>
  );
}

export default App;
