import './App.css';
import NavBar from './components/NavBar';
import ItemListConteiner from './components/ItemListConteiner';


function App() {
  return (
    <div>
    <header className="App">
      <NavBar />
      </header>
      <body className="App-body">
          <ItemListConteiner greetings={"¡Bienvenido!"} />
      </body>
    </div>
  );
}

export default App;
