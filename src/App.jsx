import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticlesView from "./components/ArticlesView";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />

      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/articles" element={<ArticlesView />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
