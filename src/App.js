import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";

function App() {
  return (
    <Router>
      <header className="App">
        <NavBar />
      </header>
      <body className="App-body">
        <Routes>
          <Route
            path=""
            element={
              <ItemListContainer
                greetings={"Top 100 Cryptos por Capitalización"}
              />
            }
          />
          <Route
            path="/"
            element={
              <ItemListContainer
                greetings={"Top 100 Cryptos por Capitalización"}
              />
            }
          />
          <Route
            path="/category/:id"
            element={
              <ItemListContainer
                greetings={"Lista de la categoría seleccionada"}
              />
            }
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </body>
    </Router>
  );
}

export default App;
