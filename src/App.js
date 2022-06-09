import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { ItemsProvider } from "./CartContext";
import CartList from "./components/CartList";
import Checkout from "./components/Checkout";

function App() {
  return (
    <ItemsProvider>
      <Router>
        <header className="App">
          <NavBar />
        </header>
        <div className="App-body">
          <Routes>
            <Route
              path=""
              element={<ItemListContainer greetings={"¡Bienvenido!"} />}
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
            <Route path="/cart" element={<CartList />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </Router>
    </ItemsProvider>
  );
}

export default App;
