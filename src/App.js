import "./App.css";
import Footer from "./components/footer";
import NavBar from "./components/navBar";
import Catalog from "./components/catalog";
import Todo from "./components/todo";
import About from "./components/about";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <About />

      <h1>Welcome to Dart Wizard Supplies</h1>

      <Catalog />

      <Todo />

      <Footer></Footer>
    </div>
  );
}

export default App;
