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
import { UserProvider } from "./contexts/UserContext";
import Error from "./components/Error";

function App() {
  return (
    <SnackbarProvider
      action={(snackbarKey) => <SnackbarCloseButton snackbarKey={snackbarKey} />}
      autoHideDuration={3000}
    >
      <UserProvider>
        <BrowserRouter>
          <Header />
          <Navbar />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/articles" element={<ArticlesView />} />
              <Route path="/articles/topic/:topic" element={<ArticlesView />} />
              <Route path="/articles/:article_id" element={<SingleArticleView />} />
              <Route path="*" element={<Error status={404} message={"Page not found"} />} />
            </Routes>
          </main>

          <Footer />
        </BrowserRouter>
      </UserProvider>
    </SnackbarProvider>
  );
}

export default App;
