import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import ArticlesView from "./components/ArticlesView";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SingleArticleView from "./components/SingleArticleView";
import SnackbarCloseButton from "./components/SnackbarCloseButton";

function App() {
  return (
    <SnackbarProvider
      action={(snackbarKey) => <SnackbarCloseButton snackbarKey={snackbarKey} />}
      autoHideDuration={3000}
    >
      <BrowserRouter>
        <Header />
        <Navbar />

        <main>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/articles" element={<ArticlesView />} />
            <Route path="/articles/:article_id" element={<SingleArticleView />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
