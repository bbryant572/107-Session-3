import "./App.css";
import Footer from "./components/footer";
import NavBar from "./components/navBar";
import Catalog from "./components/catalog";
import Home from "./components/home";
import About from "./components/about";
import Cart from "./components/cart";
import Admin from "./components/admin";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalState from "./store/globalState";

function App() {
  return (
    <div className="App">
      <GlobalState>
        <BrowserRouter>
          <NavBar></NavBar>

          <main>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/catalog" element={<Catalog />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/admin" element={<Admin />}></Route>
            </Routes>
          </main>

          <Footer></Footer>
        </BrowserRouter>
      </GlobalState>
    </div>
  );
}

export default App;
